import re
import requests
import json
from bs4 import BeautifulSoup as bs


def js_to_json_string(f):
    text = ''.join(i for i in f.readlines()[
                   1:] if not i.strip().startswith('//'))
    return text.replace('"', '\\"').replace('\'', '"').replace('`', '"')


# with open('../data/minion_types.js') as f:
#     text = ''.join(i for i in f.readlines()[
#                    1:] if not i.strip().startswith('//'))

# all_minions = json.loads(text)
all_minions = {'Revenant': 0, 'Tarantula': 0}

url = 'https://hypixel-skyblock.fandom.com/wiki/{}_Minion'

cooldown = re.compile(r'cooldown:\s+(\d+)', re.IGNORECASE)
slots = re.compile(r'storage:\s+(\d+)', re.IGNORECASE)

minions = {}

for minion in all_minions.keys():
    minions[minion] = {}
    print(f'Doing minion {minion}')
    gurl = url.format(minion)
    r = requests.get(gurl)
    soup = bs(r.text)
    try:
        table = [i for i in soup.find_all('table') if 'Cooldown' in i.text][0]
    except IndexError:
        print(f"No Stats found for {minion} minion")
        continue
    level = 1
    # this algorithm takes for granted the idea that table showing
    # level stats is organized so that each level is in order and
    # so that the cooldown for a particular level always appears
    # before the storage for that level and no data is missing
    for tr in table.find_all('tr'):
        m = cooldown.search(tr.text)
        if m:
            c = int(m.group(1))
            minions[minion][level] = {'cooldown': c}
        m = slots.search(tr.text)
        if m:
            s = int(m.group(1))
            minions[minion][level]['slots'] = s
            level += 1


with open('minion-levels-slayer.json', 'w') as f:
    json.dump(minions, f, indent=2)
