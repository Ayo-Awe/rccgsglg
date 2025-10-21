import * as migration_20250726_113050 from './20250726_113050';
import * as migration_20250726_130809 from './20250726_130809';
import * as migration_20250726_140625 from './20250726_140625';
import * as migration_20251021_184743 from './20251021_184743';

export const migrations = [
  {
    up: migration_20250726_113050.up,
    down: migration_20250726_113050.down,
    name: '20250726_113050',
  },
  {
    up: migration_20250726_130809.up,
    down: migration_20250726_130809.down,
    name: '20250726_130809',
  },
  {
    up: migration_20250726_140625.up,
    down: migration_20250726_140625.down,
    name: '20250726_140625',
  },
  {
    up: migration_20251021_184743.up,
    down: migration_20251021_184743.down,
    name: '20251021_184743'
  },
];
