from typing import Any

import scrapy
from scrapy.http import Response
from scrapy.selector import Selector
from ..items import Property


class VertexlivingSpider(scrapy.Spider):
    name = "vertexliving"
    allowed_domains = ["localhost:3000"]
    start_urls = ["http://localhost:3000"]

    def __init__(self):
        self.logger.debug(f"[{'='*40}")

    def show_property_details(self, prop):
        self.logger.debug(f"==> Title: {prop.title} location: {prop.location}")

    def extract_text_val(self, html, tag_name):
        return html.xpath(f'//{tag_name}/text()').extract_first() or ""

    def fetch_properties_list(self, text):
        self.logger.debug("="*40)

        properties = []
        # fetch albums details
        property_list = Selector(text=text).xpath('//div[@id="property-list"]').xpath('//article').extract()

        # parse html data to json
        for num, property_detail in enumerate(property_list):

            prp = Selector(text=property_detail)

            # load data to items
            prop = Property(
                title=self.extract_text_val(prp, 'h3') or "",
                house_type=prp.xpath(f'//div/text()').getall()[0] or "",
                location=prp.xpath(f'//p/text()').getall()[1] or "",
                price = prp.xpath(f'//p/text()').getall()[2] or "",
                description=prp.xpath(f'//div/text()').getall()[1] or "",
                bath = prp.xpath(f'//div')[1].xpath(f'//strong/text()').getall()[1] or "",
                area_in_sqr_ft=prp.xpath(f'//div')[1].xpath(f'//strong/text()').getall()[2] or "",
                beds = prp.xpath(f'//div')[1].xpath(f'//strong/text()').getall()[0] or ""
            )

            properties.append(prop)
            self.show_property_details(prop)
        
        return properties

    def parse(self, response: Response, **kwargs: Any) -> Any:
        self.logger.debug(f"Scraping latest properties")
        properties_list = self.fetch_properties_list(response.text)
        for prop in properties_list:
            yield prop


