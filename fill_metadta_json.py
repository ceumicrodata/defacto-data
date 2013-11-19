# -*- coding: utf-8 -*-

import unicodecsv
import json
from collections import defaultdict
import sys
import codecs

charts_metadata_path = './series_front_metadata.csv'
CHART_DEFAULTS = dict(valueFormat=".1f", valueMin=0, valueMax=30)


def generate_queries(indicator):
    def generate_url(indicator, geo_code, regions=False):
        if regions:
            geo_status = 'region'
        else:
            geo_status = 'country'
        return u'http://db.microdata.io/db/defacto/defacto_{}/{}/{}.json'.format(indicator, geo_status, geo_code)
    queries = list()
    queries.append(dict([("url", generate_url(indicator, 'EU15')), ("queryDetails", "eu15")]))
    queries.append(dict([("url", generate_url(indicator, 'V3')), ("queryDetails", "v3")]))
    queries.append(dict([("url", generate_url(indicator, 'HU')), ("queryDetails", "referenceCountry")]))
    return queries


def generate_chart(indicator, chart_title, description, details):
    chart = dict([("title", chart_title)])
    def wrap_description(text):
        return [text]
    chart.update([("description", wrap_description(description))])
    chart.update([("details", details)])
    chart.update(CHART_DEFAULTS)
    chart.update([("queries", generate_queries(indicator))])
    return chart

metadata = defaultdict(defaultdict)
topic_names = []
with open('./series_front_metadata.csv', 'rb') as file:
    reader = unicodecsv.DictReader(file, delimiter=';', encoding='iso-8859-2')
    for row in reader:
        if row['topic'] not in metadata.keys():
            metadata[row['topic']]["title"] = row['topic']
            metadata[row['topic']]["charts"] = defaultdict()
        chart = generate_chart(row['indicator'], row['chart'], row['description'], row['details'])
        metadata[row['topic']]["charts"][row['indicator']] = chart
        # print row


for topic in metadata.keys(): print topic
print metadata
#metadata = json.load(open('./metadata/metadata.json'))
with codecs.open('./metadata.json','wb') as file:
    json.dump(metadata, file, indent=4)


'''
{
  "test1" : {
    "title" : "Test 1",
    "charts" : {
      "industrygrowth" : {
        "title" : "Industry growth",
        "description" : [
          "Industry growth Industry growth Industry growth",
          "Ipari növekedés Industry growth Industry growth"
        ],
        "details" : "Industry growth details",

        "valueFormat" : ".1f",

        "valueMin" : 0,
        "valueMax" : 30,

        "queries" : [
          {
            "url" : "http://db.microdata.io/db/defacto/defacto_industrygrowth/country/EU15.json",
            "queryDetails" : "eu15"
          },
          {
            "url" : "http://db.microdata.io/db/defacto/defacto_industrygrowth/country/V3.json",
            "queryDetails" : "v3"
          },
          {
            "url" : "http://db.microdata.io/db/defacto/defacto_industrygrowth/country/HU.json",
            "queryDetails" : "referenceCountry"
          }
        ]
      }
    }
  }
}
'''