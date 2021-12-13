#!/bin/bash
url=${SLACK_WEBHOOK_URL} 
payload="{\"text\": \"$Approval_URL\"}"
echo "Send Message From Slack" 
curl -X POST -H "Content-type: application/json" -d "$payload" $url
