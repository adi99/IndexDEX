import merge from 'lodash/merge';
import registry from '@balancer-labs/assets/generated/pm/registry.homestead.json';
import registryKovan from '@balancer-labs/assets/generated/pm/registry.kovan.json';
import registryHarmony from '@/_balancer/registry.harmony.json';
import homestead from '@/config/homestead.json';
import kovan from '@/config/kovan.json';
import harmony from '@/config/harmony.json';

const configs = { homestead, kovan, harmony };
configs.homestead = merge(registry, configs.homestead);
configs.kovan = merge(registryKovan, configs.kovan);
configs.harmony = merge(registryHarmony, configs.harmony);
const network = process.env.VUE_APP_NETWORK || 'harmony';
const config = configs[network];
config.env = process.env.VUE_APP_ENV || 'staging';

export default config;
