git clone https://github.com/Und3rf10w/kali-anonsurf.git && cd kali-anonsurf/ && ./installer.sh && anonsurf start && sudo apt install macchanger && sudo macchanger -r <network>
ifconfig



# hide ipv6 

sysctl -w net.ipv6.conf.all.disable_ipv6=1
sysctl -w net.ipv6.conf.default.disable_ipv6=1
sysctl -w net.ipv6.conf.lo.disable_ipv6=1


#permanent sol


To permanently disable IPv6 on your Kali Linux system, you can modify the /etc/sysctl.conf file with your editor. Add the following 3 lines to the /etc/sysctl.conf configuration file:

net.ipv6.conf.all.disable_ipv6=1
net.ipv6.conf.default.disable_ipv6=1
net.ipv6.conf.lo.disable_ipv6=1
sysctl -p
