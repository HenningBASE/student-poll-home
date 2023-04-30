cd /home/ubuntu/student-poll-home/client
npm install
quasar build

cp /home/ubuntu/environment/.env /home/ubuntu/student-poll-home/server

cd /home/ubuntu/student-poll-home/server
npm install

systemctl stop studentPoll
systemctl start studentPoll