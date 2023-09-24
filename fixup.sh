# cp ./src/lib/index.d.ts dist 
# cp ./src/lib/index.d.cts dist 

# rm -rf dist/*/lib/index.d.ts 

cat >dist/cjs/package.json <<!EOF
{
    "type": "commonjs"
}
!EOF

cat >dist/mjs/package.json <<!EOF
{
    "type": "module"
}
!EOF
