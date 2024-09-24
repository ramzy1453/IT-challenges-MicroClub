from bs4 import BeautifulSoup
import requests

base_url = 'https://discord.com/'
sitemap = [
    base_url
]


def append_links(url):
    website = requests.get(url)
    soup = BeautifulSoup(website.text, 'html.parser')
    links = soup.find_all('a')

    for link in links:
        href = link.get('href')
        if href is None:
            continue
        if base_url in href and href not in sitemap:
            sitemap.append(href)


for link in sitemap:
    sitemap_length = len(sitemap)
    append_links(link)
    print(len(sitemap), sitemap_length)
    # if len(sitemap) == sitemap_length:
    #     break

with open('sitemap.txt', 'w') as file:
    for link in sitemap:
        file.write(link + '\n')