#!/bin/bash

DATA_DIR=$(pwd)

echo "remove wps-offie"
sudo dpkg -r  wps-office
echo "success remove wps-office"

sleep 2
echo "Clean up WPS cache"
if [ -d /opt/kingsoft ]; then
	sudo rm -rf /opt/wps
fi
sudo rm -rf ${HOME}/.local/share/Kingsoft
sudo rm -rf ${HOME}/.config/Kingsoft
echo "success Clean"
sleep 2

echo "start install WPS"
sudo dpkg -i ${DATA_DIR}/wps-office*.deb
echo "success install WPS"
