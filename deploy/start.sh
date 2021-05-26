tar -zxvf vocabulary-trainer-server.tar.gz
NODE_ENV=production pm2 start node dist/index.js --name vocabulary-trainer-server