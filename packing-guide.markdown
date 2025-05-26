---
layout: page
title: Packing guide
permalink: /packing-guide/
---

# Create a packing list
<form method="GET" action="/packing-list">
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
  </fieldset>
  <button>Generate</button>
</form>
