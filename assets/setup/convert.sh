#!/bin/sh

for i in original/*
do
    inkscape --export-type=svg --export-filename=`echo $i | sed 's,original/,,'` $i
done
