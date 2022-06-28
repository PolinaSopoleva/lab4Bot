#!/bin/bash
SET TELEGRAM_KEY="5072101703:AAFKDUK1hpmfXnZfNm2fn_hk6caqxaRSgkk"
docker build -t bot .
docker run -p 8888:8888 bot