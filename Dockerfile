FROM oguzpastirmaci/ubuntu-node

COPY . /src  
RUN cd /src; npm install

EXPOSE 8000

CMD ["nodejs", "/src/index.js"] 