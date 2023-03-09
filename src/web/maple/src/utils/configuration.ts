import { ConfigurationBuilder } from '@linker-design/configuration';

const builder = new ConfigurationBuilder();

builder.addGlobalVariable('__MAPLE__');

export const CONFIG = builder.build();