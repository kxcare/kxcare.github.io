#!/bin/bash

# 更新源文件
echo "更新源文件"
sudo apt update
echo "成功更新源文件"

echo "查询软件版本号"
# 定义要获取数据的网址
website_url="https://archive2.kylinos.cn/DEB/KYLIN_DEB/pool/all/"

# 发送HTTP请求获取网站数据
website_data=$(wget -qO- "$website_url")

# 判断返回的数据是否有效
if [[ -n "$website_data" ]]; then
    # 使用正则表达式提取以 "wechat-beta" 开头的内容
    pattern='<a href="(wechat-beta_[^"]+\.deb)">'
    matches=$(echo "$website_data" | grep -Eo "$pattern")

    # 提取版本号，并找到最新版本
    latest_version=""
    for match in $matches; do
        version=$(echo "$match" | grep -Eo 'wechat-beta_([0-9]+\.){3}[0-9]+' | cut -d'_' -f2)
        if [[ -z "$latest_version" || "$version" > "$latest_version" ]]; then
            latest_version=$version
        fi
    done

    # 输出最新版本
    echo "微信最新版本：$latest_version"
else
    echo "无法获取网站数据。"
fi


echo 按任意键退出
read -n 1