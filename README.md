# SEED

    to seed
    node seed && node seed/seed2/index.js && node seed/seed2/indexx.js
# Component Generate
    ng g c user/registra/com/schedule --dry-run --module ./user/registra/registra.module.ts
    ng generate store StaffState --root false --state-path user/director/store  --module user/director/director.module.ts --dry-run
    ng generate store StaffState --root false --state-path user/director/store  --module user/director/director.module.ts 
    ng g feature user/director/store/staff --group=true --reducers=./index.ts --module=user/director/director.module.ts  --api=true --dry-run
    ng g feature user/director/store/staff --group=true --reducers=./index.ts --module=user/director/director.module.ts  --api=true 
    ng g store regiStore --root false --state-path user/registra/store --module user/registra/registra.module.ts

    ng g entity user/shared/schedule/store/event --module ../schedule.module.ts --reducers ../store/index.ts --group=true --dry-run