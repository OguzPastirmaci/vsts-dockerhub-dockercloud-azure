FROM oguzpastirmaci/ubuntu-node

COPY . /src  
RUN cd /src; npm install

EXPOSE 80

CMD ["nodejs", "/src/index.js"] 
