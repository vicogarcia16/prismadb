const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
				username: 'ajolonauta',
				mission: 'Node'
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
				username: 'ajolonauta1',
				mission: 'Node'
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
				username: 'ajolonauta2',
				mission: 'Java'
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
				username: 'ajolonauta3',
				mission: 'Node'
      },
    });

    const woopa4 = await prisma.explorer.upsert({
        where: { name: 'Woopa 4' },
        update: {},
        create: {
          name: 'Woopa 4',
                  username: 'vicogarcia16',
                  mission: 'Node'
        },
      });
      const student1 = await prisma.student.upsert({
        where: { name: "student1"},
        update: {},
        create: {
          name: "student1",
          lang: ["javascript", "elixir"],
          missionCommander: "Carlo",
          enrollments: 1,
          hasCertification: false
        }
      })
      
      const student2 = await prisma.student.upsert({
        where: { name: "student2"},
        update: {},
        create: {
          name: "student2",
          lang: ["java", "c++"],
          missionCommander: "fer",
          enrollments: 2,
          hasCertification: false
        }
      })
      const student3 = await prisma.student.upsert({
        where: { name: "student3"},
        update: {},
        create: {
          name: "student3",
          lang: ["javascript", "java"],
          missionCommander: "Carlo",
          enrollments: 1,
          hasCertification: true
        }
      })
    console.log('Create 4 explorers');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();

