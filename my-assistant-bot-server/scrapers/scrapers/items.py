# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

from dataclasses import dataclass

@dataclass
class Property:

    title: str | None = None
    house_type: str | None = None
    location: str | None = None
    price: int | None = None
    description: str | None = None
    bath: str | None = None
    beds: str | None = None
    area_in_sqr_ft: str | None = None

