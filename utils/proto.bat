echo ====================
echo proto generate start
cd ../Egret
call pb-egret generate
cd ../Nodejs/protobuf
call pbjs -t static-module -w commonjs -o common.js common.proto --no-encode --no-decode --no-create --no-verify --no-delimited 
call pbts -o common.d.ts common.js
echo proto generate end