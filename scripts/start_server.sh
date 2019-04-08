#!/bin/bash
echo "script buesssss"
sudo pm2 kill
sudo pm2 delete all
cd /home/ec2-user/cdf
sudo pm2 start npm -- start
sudo pm2 startup
sudo pm2 save
