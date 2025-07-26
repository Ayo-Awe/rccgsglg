import * as migration_20250726_113050 from './20250726_113050';
import * as migration_20250726_130809 from './20250726_130809';

export const migrations = [
  {
    up: migration_20250726_113050.up,
    down: migration_20250726_113050.down,
    name: '20250726_113050',
  },
  {
    up: migration_20250726_130809.up,
    down: migration_20250726_130809.down,
    name: '20250726_130809'
  },
];
