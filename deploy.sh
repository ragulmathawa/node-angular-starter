if [ ! -f "$1" ]; then
	echo "usage: ./deploy.sh <compose.yml>"
	exit 1;
fi

export SECRETS_VERSION=1
INSTALL_DIR=/home/ubuntu docker stack deploy --compose-file $1 --with-registry-auth swarm
