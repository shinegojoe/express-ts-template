pwd
npm run build
tar -zcvf vocabulary-trainer-server.tar.gz dist
scp vocabulary-trainer-server.tar.gz taka@203.204.160.248:/home/taka/project/deploy/vocabulary-trainer-server
rm tsconfig.tsbuildinfo
rm -r dist
rm dist.tar.gz

