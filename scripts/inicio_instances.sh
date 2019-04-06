#!/bin/bash
sudo yum install -y gcc-c++ make
curl -sL https://rpm.nodesource.com/setup_11.x | sudo -E bash -
sudo yum install nodejs -y

#install agente codedeploy
  sudo yum install ruby -y
  sudo yum install wget -y
  cd /home/ec2-user
  wget https://aws-codedeploy-us-east-1.s3.amazonaws.com/latest/install
  chmod +x ./install
  sudo ./install auto


sudo amazon-linux-extras install epel -y
sudo yum install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
sudo systemctl status nginx

sudo npm i -g pm2
sudo pm2 update
sudo pm2 startup
sudo pm2 startup systemd
sudo pm2 save

#!/bin/bash
sudo yum install -y gcc-c++ make
curl -sL https://rpm.nodesource.com/setup_11.x | sudo -E bash -
sudo yum install nodejs -y
sudo yum install ruby -y
sudo yum install wget -y
cd /home/ec2-user
wget https://aws-codedeploy-us-east-1.s3.amazonaws.com/latest/install
chmod +x ./install
sudo ./install auto
sudo amazon-linux-extras install epel -y
sudo yum install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
sudo systemctl status nginx
sudo npm i -g pm2
sudo pm2 update
sudo pm2 startup
sudo pm2 startup systemd
sudo pm2 save
