import { prisma } from './server/prisma.ts';

async function main() {
    const users = await prisma.user.findMany({
        where: {
            email: { endsWith: "prisma.io" }
        },
    });
    console.log("Found users:", users);
}

main()
  .catch(console.error)
  .finally(async () => {
    // Note: since we use an adapter, we rely on standard disconnects
    await prisma.$disconnect();
  });
