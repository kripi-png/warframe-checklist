<script lang="ts">
import Dialog, { Title, Content, Actions } from '@smui/dialog';
import Button from '@smui/button';
import Switch from '@smui/switch';
import FormField from '@smui/form-field';
import { settingsStore } from '$lib/stores/UserSettings';
import { itemName } from '$lib/utils';

type Props = {
  open: boolean;
};

let { open = $bindable() }: Props = $props();

const defaultSettings = {
  hideCompleted: false,
  includeHelminthSacrifice: false,
};

type LocalSettings = typeof defaultSettings;

const settingKeys = Object.keys(defaultSettings) as (keyof LocalSettings)[];

const settings: LocalSettings = $derived(
  Object.fromEntries(
    settingKeys.map((key) => [
      key,
      settingsStore.getSetting(key) ?? defaultSettings[key],
    ]),
  ) as LocalSettings,
);
</script>

<Dialog
  bind:open
  aria-labelledby="buttons-title"
  aria-describedby="buttons-content"
  autoStackButtons={false}
>
  <Title id="form-title">User Settings</Title>
  <Content id="form-content">

    {#each settingKeys as settingKey}
      {@const checked = settings[settingKey]}
      <div>
        <FormField>
          <Switch {checked} onSMUISwitchChange={() => settingsStore.setSetting(settingKey, !checked)} />
          {#snippet label()}
            <span>{itemName(settingKey)}</span>
          {/snippet}
        </FormField>
      </div>
    {/each}
  </Content>

  <Actions>
    <Button>Close</Button>
  </Actions>
</Dialog>
