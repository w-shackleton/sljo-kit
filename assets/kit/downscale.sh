#!/bin/sh

for i in original/*
do
    convert -resize 1024x1024 -strip -interlace plane -quality 80 $i `echo $i | sed 's,original/,,'` &
done
