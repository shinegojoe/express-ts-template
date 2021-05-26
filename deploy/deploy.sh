pwd
npm run build
tar -zcvf dist.tar.gz dist
cp dist.tar.gz deploy/
node deploy/deploy.js
rm tsconfig.tsbuildinfo
rm -r dist
rm dist.tar.gz