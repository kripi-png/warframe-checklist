<script lang="ts">
import Paper from '@smui/paper';
import TextField from '@smui/textfield';
import { layout } from '$lib/layout.svelte';
import checklistStore from '$lib/stores/CitrineStore';
import ItemChecklists from '$lib/components/ItemChecklists.svelte';
import { setChecklistContext } from '$lib/context/checklist';
layout({ custom });

setChecklistContext(checklistStore);
const [redMoney, blueMoney] = $derived(checklistStore.balance);
</script>

{#snippet custom()}
    <Paper>
        <h1>Citrine</h1>
        <TextField
            value={redMoney}
            onchange={(e: Event) =>
                checklistStore.setBalance([
                    Number((<HTMLInputElement>e?.target)?.value),
                    blueMoney,
                ])
            }
            label="Red"
            type="number"
        />
        <TextField
            value={blueMoney}
            onchange={(e: Event) =>
                checklistStore.setBalance([
                    redMoney,
                    Number((<HTMLInputElement>e?.target)?.value),
                ])
            }
            label="Blue"
            type="number"
        />
    </Paper>
{/snippet}

<ItemChecklists />
