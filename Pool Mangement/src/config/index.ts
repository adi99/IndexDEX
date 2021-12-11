import merge from 'lodash/merge';
import registry from '@balancer-labs/assets/generated/pm/registry.homestead.json';
import registryKovan from '@balancer-labs/assets/generated/pm/registry.kovan.json';
import registryHarmony from '@/_balancer/registry.harmony.json';
import homestead from '@/config/homestead.json';
import kovan from '@/config/kovan.json';
import findora from '@/config/Findora.json';

const configs = { homestead, kovan, findora };
configs.homestead = merge(registry, configs.homestead);
configs.kovan = merge(registryKovan, configs.kovan);
configs.findora = merge(registryHarmony, configs.findora);
const network = process.env.VUE_APP_NETWORK || 'findora';
const config = configs[network];
config.env = process.env.VUE_APP_ENV || 'staging';

export default config;
