# WOZX Farm Browser

### To Start Development

###### Installing dependencies

```bash
$ yarn
$ yarn build
```

```nginx config
server {
    listen 8000;
    server_name wozx.browser.com;
    root /var/www/nervledger-vision/build;

    # Load configuration files for the default server block.
 	location / {
		try_files $uri $uri/ /index.html;
    }

    error_page 404 /404.html;
    location = /40x.html {}

    error_page 500 502 503 504 /50x.html;
    location = /50x.html {}
}
```

```注
1. 重新部署需要更换farm对应的池子 src/constants/farm.ts

```

###### Running locally
