import json
import requests
import time
from pprint import pprint

# Set the amount of records per request to receive
limit = 5
base_url = f"https://api.rechargeapps.com/charges?limit={limit}"
headers = {
    "X-Recharge-Access-Token": "sk_1x1_4fa4c3b606732f2a62dc6220c2d03fec336024d29ccfd0b0cec5b62dca9f2fae",
    "X-Recharge-Version": "2021-11",
    "Accept": "application/json",
}

# Note that the value of next_cursor is passed as a page_info query param
def get_next_url(response_data):
    next_url = None
    if response_data.get('next_cursor') is not None:
        next_cursor = response_data['next_cursor']
        next_url = f"{base_url}&page_info={next_cursor}"
    return next_url

all_records = []
url = base_url
while len(all_records) < 20:
    # Get the data for this page
    result = requests.get(url, headers=headers)
    data = json.loads(result.text)

    # Add the results to our result set
    for charge in data.get('charges', []):
        all_records.append(charge)

    if not data.get('next_cursor'):
        # Do not loop again, no more records available
        break
    else:
        # Update the URL for the next page
        url = get_next_url(data)
        if not url:
            # no next url
            break

        # Sleep to avoid hitting rate limits
        time.sleep(1)

pprint(all_records)