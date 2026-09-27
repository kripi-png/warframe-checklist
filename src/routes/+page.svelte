<script lang="ts">
import { layout } from '$lib/layout.svelte';
import Paper from '@smui/paper';
layout({});
</script>

<Paper>
  <div class="text-3xl">Warframe Checklist</div>
  <div class="text-2xl">What is this?</div>
  <p class="py-2 text-base">
    Modern Warframes come with a resource that can be used to purchase the Warframe and related items from a vendor. For example, <span class="text-blue-300">Narin</span> blueprints can be obtained from the missions as a drop, but her components can also be purchased with <span class="text-blue-300">Entropic Kuva</span>, which drops from the same missions.
  </p>
  <p class="py-2 text-base">
    To efficiently obtain all wanted items, it is important to first farm enough currency to purchase all missing items at once. Otherwise, if the player were to purchase <span class="text-blue-300">Narin</span>'s blueprint for 400 <span class="text-blue-300">Entropic Kuva</span>, and then obtained it while farming the rest, that would effectively be an hour worth of <span>Entropic Kuva</span> wasted.
  </p>
  <p class="py-2 text-base">
    That is what this tracker is for: to see how much of a certain resource is needed in total to purchase everything related to a Warframe.
  </p>
  <p class="py-2 text-base">
    Developed by klubbu (<a href="https://github.com/kripi-png">kripi-png </a><i class="fa-brands fa-github"></i>).
  </p>

  <div class="text-2xl">Available Warframes</div>
  <div>
    |
    <a class="text-xl" href="/wf/narin">Narin</a> |
    <a class="text-xl" href="/wf/orion-sirius">Orion & Sirius</a> |
    <a class="text-xl" href="/wf/follie">Follie</a> |
    <a class="text-xl" href="/wf/nokko">Nokko</a> |
    <a class="text-xl" href="/wf/koumei">Koumei</a> |
    <a class="text-xl" href="/wf/citrine">Citrine</a> |
    <a class="text-xl" href="/wf/voruna">Voruna</a> |
  </div>
</Paper>
