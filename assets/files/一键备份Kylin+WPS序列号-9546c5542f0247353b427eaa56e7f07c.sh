#!/bin/bash

# 获取当前脚本所在文件夹的路径
script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# 机箱序列号
jx_file="/usr/sbin/dmidecode"
if [ -x "$jx_file" ]; then
	jx_content="机箱序列号：$(sudo $jx_file -t 1 | grep -i 'Serial Number' | awk '{print $3}')"
else
	echo "没有找到机箱序列号文件"
fi

# 麒麟注册码
zcm_file="/usr/bin/kylin_gen_register"
if [ -x "$zcm_file" ]; then
	zcm_content="麒麟注册码：$(sudo "$zcm_file")"
else
	echo "没有找到注册码文件"
fi

# 麒麟激活码
jhm_file="/etc/.kyactivation"
if [ -s "$jhm_file" ]; then
	jhm_content="$(cat "$jhm_file")"
	# 插入连字符
	jhm_content="麒麟激活码：$(echo $jhm_content | sed 's/..../&-/g; s/-$//')"
else
	echo "没有找到激活码文件"
fi

# 客户服务号
fwh_file="/usr/bin/kylin_serial"
if [ -x "$fwh_file" ]; then
	fwh_content="客户服务号：$(sudo "$fwh_file")"
else
	echo "没有找到服务号文件"
fi

# WPS序列号
wps_file="/opt/kingsoft/.auth/license2.dat"
if [ -s "$wps_file" ]; then
	wps_content="$(tail -c 60 $wps_file | head -c 50 | tr -d '\00')"
	wps_content="WPS序列号：$(echo $wps_content | sed 's/...../&-/g; s/-$//')"
else
	echo "没有找到WPS序列号文件"
fi

# 输出文件路径
output_file="$script_dir/Kylin系统序列号备份.txt"

# 将内容输出到备份文件
echo -e "$jx_content\n$zcm_content\n$jhm_content\n$fwh_content\n$wps_content" > "$output_file"
echo "备份文件已生成: $output_file"

echo 按任意键退出
read -n 1