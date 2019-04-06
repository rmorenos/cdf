#!/bin/bash
echo "script buenoniseeeeesss"
sudo pm2 kill
sudo pm2 delete all
cd /home/ec2-user/cdf
sudo pm2 stop npm --
sudo pm2 save
sudo pm2 startup
