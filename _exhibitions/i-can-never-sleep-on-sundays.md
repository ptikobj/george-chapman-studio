---
layout: exhibition
author: George Chapman
title: I Can Never Sleep on Sundays — Exhibitions — George Chapman
short_title: I Can Never Sleep on Sundays
category: I Can Never Sleep on Sundays
description: >-
  The effect of spaces is so profound that we tend to personify their
  qualities and compare them to people. Yet the evocations of spaces
  remain a subjective discussion.
date: 08/12/2010
permalink: /exhibitions/i-can-never-sleep-on-sundays.html
location: Michaelis School of Fine Art, Cape Town
exhibition_dates: 8 — 21 December 2010
image: 1000px-nest_of_salt.jpg
image_alt: >-
  Installation view of 'Nest of Salt' group exhibition, AMP Gallery,
  Peckham, London. Photo: Jérôme Favre
image_caption: >-
  Photo: Jérôme Favre
---

# {{ page.short_title }} {#title}
{{ page.exhibition_dates }}

{{ page.location }}

The implicit representational ambiguity in Chapman's work engenders a
curious act of looking. There is the dislocation of memory from the
specificity of place and yet a relocation at the same time – somewhere
in the space of dreaming. Chapman's images situate the viewer firmly
within the labyrinth of city streets with no names, evoking a tension
with the potential to fantasize 'reading' the city from a vantage point
on high. De Certeau remarks in Walking in the City (1984) that as city
practitioners we live below the thresholds of a celestial visibility. We
are the walkers, the writers, of the city. It is our movements, our
memories and our fantasies that shape the lived experience of space. A
single space can hold the potential for so many variants of fantasy. In
Italo Calvino's Invisible Cities (1972) Marco Polo regales an aging
Kublai Khan with tales of the cities he has seen in his travels. It soon
becomes clear that each of these fantastic places is really the same
place. 'Desires are already memories,' Marco Polo remarks of Isidora,
the dreamed-of city that contained him as a young man. He says of the
city of Zaira that 'as this wave from memories flows in, the city soaks
it up like a sponge and expands.'

Chapman's city is such a sponge, a limitless resource of re-imaginings
in paint. It is the city where the artifice of memory simultaneously
crumbles and is re-imagined.

Extract from <a href="/writing/latent-horizon.html" target="_blank"
class="bb b--dashed bl-0 bt-0 br-0 black-90 hover-red link ma0
sans-serif">'Latent Horizon' (2010) by Natasha Norman</a>

—  

{% assign artworks = site.paintings | where:"category", page.category  %}
{% for item in artworks %}

[![{{ item.artist }}, '{{ item.artwork_title }}' ({{ item.year }}). {{ item.medium }}. {{ item.size }}. Photo by {{ item.photo_credit }}](/assets/img/{{ item.image }})]({{ item.permalink }})

{{ item.artist }}, '{{ item.artwork_title }}' ({{ item.year }}). {{ item.medium }}. {{ item.size }}. Photo by {{ item.photo_credit }}

{% endfor %}

<a
href="/assets/docs/george_chapman-i_can_never_sleep_on_sundays_exhibition_catalogue_2010.pdf"
target="_blank" class="bb b--dashed bl-0 bt-0 br-0 black-90 hover-red
link ma0 sans-serif">Download PDF</a>
