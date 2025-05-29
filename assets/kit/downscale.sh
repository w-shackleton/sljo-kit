#!/bin/sh

for i in original/*
do
    convert -resize 1024 -strip -interlace plane $i `echo $i | sed 's,original/,,'` &
done
