FROM php:7.3.11-apache

RUN apt-get update \
    && apt-get -y install --no-install-recommends apt-utils dialog 2>&1 \
    #
    # install git iproute2, procps, lsb-release (useful for CLI installs)
    && apt-get -y install git iproute2 procps iproute2 lsb-release zip unzip libzip-dev libz-dev libmemcached-dev \
    && docker-php-ext-install pdo_mysql \
    && echo '' | pecl install memcached \ 
    && echo "extension=$(find /usr/local/lib/php/extensions/ -name memcached.so)" > /usr/local/etc/php/conf.d/memcached.ini \
    && yes | pecl install zip \
    && echo "extension=$(find /usr/local/lib/php/extensions/ -name zip.so)" > /usr/local/etc/php/conf.d/zip.ini \
    && php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
    && php -r "if (hash_file('sha384', 'composer-setup.php') === 'baf1608c33254d00611ac1705c1d9958c817a1a33bce370c0595974b342601bd80b92a3f46067da89e3b06bff421f182') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;" \
    && php composer-setup.php \
    && php -r "unlink('composer-setup.php');" \
    && mv composer.phar /usr/bin/composer \
    # Apache modules
    && a2enmod rewrite \
    && a2disconf docker-php \
    #
    # Clean up
    && apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

COPY ./apache2_conf/000-default.conf /etc/apache2/sites-enabled/000-default.conf
COPY ./apache2_conf/apache2.conf /etc/apache2/apache2.conf
