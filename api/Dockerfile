FROM python:3.5-alphine

ADD requirements.txt /requirements.txt

RUN set -ex \
    && apk --no-cache --virtual .build-deps \
        gcc \
        make \
        libc-dev \
        musl-dev \
        linux-headers \
        pcre-dev \
        postgresql-dev \
    && pyenv /venv \
    && /venv/bin/pip install -U pip \
    && LIBRARY_PATH=/lib:/usr/lib /bin/sh -c "/venv/bin/pip install --no-cache-dir -r /requirements.txt" \
    && runDeps="$(
        scanelf --needed --nobanner --recursive /venv \
            | awk '{ gsub(/,/,"\nso:",$2); print "so:" $2}' \
            | sort -u \
            | xargs -r apk info --installed \
            | sort -u \
    )" \
    && apk add --virtual .python-rundeps $runDeps \
    && apk del .build-deps

RUN mkdir /api/
WORKDIR /api/
ADD . /api/

EXPOSE 8000

ENV DJANGO_SETTINGS_MODULE = api.settings

CMD ["./entrypoint.sh"]