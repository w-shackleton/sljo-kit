---
layout: packing-guide
title: Packing guide
permalink: /packing-guide/
in_menu: True
---

# Create a packing list
<form method="GET" action="/packing-list" class="guide-buttons" name="packingguide">
  <fieldset>
    <legend>Type of gig</legend>
    <div><label><input type="radio" name="gig" value="full" checked /> Full band</label></div>
    <div><label><input type="radio" name="gig" value="mini" /> Mini SLJO</label></div>
  </fieldset>
  <fieldset>
    <legend>Venue</legend>
    <div><label><input type="radio" name="venue" value="small" /> Small venue (eg. pub)</label></div>
    <div><label><input type="radio" name="venue" value="big" checked /> Big venue (eg. church)</label></div>
    <div><label><input type="radio" name="venue" value="outdoor" /> Outdoors</label></div>
  </fieldset>
  <fieldset>
    <legend>Number of musicians</legend>
    <div class="two-flex">
      <div>
        <label><input type="number" name="alto1" min=1 max=12 data-fullband=6 /> Alto 1</label>
        <label><input type="number" name="alto2" min=1 max=12 data-fullband=10 /> Alto 2</label>
        <label><input type="number" name="tenor1" min=1 max=12 data-fullband=6 /> Tenor 1</label>
        <label><input type="number" name="tenor2" min=1 max=12 data-fullband=6 /> Tenor 2</label>
        <label><input type="number" name="bari" min=1 max=3 data-fullband=3 /> Bari</label>
        <label><input type="number" name="clarinet" min=1 max=4 data-fullband=3 /> Clarinet</label>
      </div>
      <div>
        <label><input type="number" name="tpt1" min=1 max=4 data-fullband=4 /> Trumpet 1</label>
        <label><input type="number" name="tpt2" min=1 max=4 data-fullband=4 /> Trumpet 2</label>
        <label><input type="number" name="tpt3" min=1 max=4 data-fullband=4 /> Trumpet 3</label>
        <label><input type="number" name="tpt4" min=1 max=4 data-fullband=4 /> Trumpet 4</label>

        <label><input type="number" name="tbn1" min=1 max=4 data-fullband=2 /> Trombone 1</label>
        <label><input type="number" name="tbn2" min=1 max=4 data-fullband=2 /> Trombone 2</label>
        <label><input type="number" name="tbn3" min=1 max=4 data-fullband=2 /> Trombone 3</label>
        <label><input type="number" name="tbn4" min=1 max=4 data-fullband=2 /> Trombone 4</label>
      </div>
    </div>
  </fieldset>
  <fieldset>
    <legend>Other</legend>
    <div>
      <label><input type="checkbox" name="vocal" value="yes" /> Vocals</label>
    </div>
    <div>
      <label><input type="checkbox" name="electric" value="yes" checked /> Venue has electricity</label>
    </div>
    <div>
      <label><input type="checkbox" name="lights" value="yes" /> Stage lights</label>
    </div>
    <div>
      <label><input type="checkbox" name="payments" value="yes" /> Taking payments (tickets / donations)</label>
    </div>
    <div>
      <label><input type="checkbox" name="promo" value="yes" /> Promotional material</label>
    </div>
  </fieldset>
  <button>Generate</button>
</form>
