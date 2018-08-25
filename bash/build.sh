#! /bin/bash

PROJECT_PATH=`pwd`
PROJECT=`echo ${PROJECT_PATH} | awk -F "/" '{ print $NF }'`
DOCKER_BIN=`which docker`
AIRJS_IMAGES="airjs-images"
AIRJS_CONTAINER="airjs-container"

PLATFORM="$(uname -s)"
DOCKERFILE="${PROJECT_PATH}/node_modules/@node/airjs-docker/Dockerfile"
DOCKERFILE_TPL="${PROJECT_PATH}/node_modules/@node/airjs-docker/Dockerfile_tpl"

reportWeather() {
    # 天气播报功能
    curl wttr.in/~Hangzhou?lang=zh
}

# 选择最佳仓库
chooseRecommendRepo() {
    local repoList=("registry.docker-cn.com" "docker.mirrors.ustc.edu.cn" "hub-mirror.c.163.com")
    local recommendRepo=${repoList[0]};

    for repo in ${repoList[@]}; do
        checkRepoStatus ${repo}
        if [ $? -eq 1 ]; then
            recommendRepo=${repo}
            break;
        fi
    done

    echo ${recommendRepo};
}

# 检测仓库是否有效
checkRepoStatus() {
    local repo=$1

    STATUS=`curl -o /dev/null -s -w %{http_code} ${repo}`
    if [ ${STATUS} -eq 200 ]; then
        return 1;
    fi

    return 0;
}


while getopts d:w: name
do
    case ${name} in
        d)
            DOCKER_CMD=$OPTARG
            ;;
        w)
            WATCH_DIR=$OPTARG
            ;;
    esac
done

if [ -z "${DOCKER_BIN}" ]; then
    echo '请先安装docker';
    exit 1;
fi

if [[ ${DOCKER_CMD} == "" ]]; then
    DOCKER_CMD="-p 8080:8080"
fi

if [[ ${WATCH_DIR} == "" ]]; then
    WATCH_DIR="true"
fi

if [ ${PLATFORM} == "Darwin" ]; then
    SED_COMP="''"
fi

# 开启天气播报功能^_^
reportWeather

IS_CONTAINER_EXIST=`${DOCKER_BIN} ps -a | grep ${AIRJS_CONTAINER}`
if [ -n "${IS_CONTAINER_EXIST}" ]; then
    echo "rm -f ${AIRJS_CONTAINER}";
    ${DOCKER_BIN} rm -f ${AIRJS_CONTAINER}
fi;

IS_IMAGE_EXIST=`${DOCKER_BIN} images | grep ${AIRJS_IMAGES}`
if [ -n "${IS_IMAGE_EXIST}" ]; then
    echo "rmi -f ${AIRJS_IMAGES}";
    ${DOCKER_BIN} rmi -f ${AIRJS_IMAGES}
fi;

# 选择最佳的镜像仓库
RECOMMEND_REPO=$(chooseRecommendRepo)

cp -f ${DOCKERFILE_TPL} ${DOCKERFILE}
sed -i ${SED_COMP} s/"__RECOMMEND_REPO__"/"${RECOMMEND_REPO}"/g ${DOCKERFILE}
sed -i ${SED_COMP} s/"__PROJECT__"/"${PROJECT}"/g ${DOCKERFILE}
sed -i ${SED_COMP} s/"\"watch\": .*"/"\"watch\": ${WATCH_DIR}"/g ${PROJECT_PATH}/node_modules/@node/airjs/airjs-ci/ecosystem/ecosystem_tpl.json

${DOCKER_BIN} build -f ${DOCKERFILE} --pull --rm -t ${AIRJS_IMAGES} ${PROJECT_PATH}
${DOCKER_BIN} run ${DOCKER_CMD} -v ${PROJECT_PATH}:/data/webroot/${PROJECT} -it -d --name ${AIRJS_CONTAINER} ${AIRJS_IMAGES}

rm -rf ./Dockerfile*
rm -rf ./ecosystem_tpl*

echo "正在进入虚拟机，请稍等..."
${DOCKER_BIN} attach ${AIRJS_CONTAINER}
