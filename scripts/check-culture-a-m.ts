import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function checkCulture() {
  const countriesAM = [
    "Afghanistan", "Albania", "Algeria", "Angola", "Argentina", "Armenia", "Australia",
    "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus",
    "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina",
    "Botswana", "Brazil", "Bulgaria", "Burkina Faso", "Cambodia", "Cameroon", "Canada",
    "Chile", "China", "Colombia", "Costa Rica", "Croatia", "Cuba", "Cyprus",
    "Czech Republic", "Democratic Republic of Congo", "Denmark", "Dominican Republic",
    "Ecuador", "Egypt", "El Salvador", "Estonia", "Ethiopia", "Fiji", "Finland",
    "France", "Georgia", "Germany", "Ghana", "Greece", "Guatemala", "Haiti",
    "Honduras", "Hungary", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel",
    "Italy", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Laos", "Latvia",
    "Lebanon", "Libya", "Lithuania", "Luxembourg", "Malaysia", "Mexico", "Moldova",
    "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar"
  ];

  const existing = await prisma.locationSummary.findMany({
    where: {
      type: 'country',
      category: 'culture',
      name: { in: countriesAM }
    },
    select: { name: true }
  });

  const existingNames = existing.map(e => e.name);
  const missing = countriesAM.filter(c => !existingNames.includes(c));

  console.log('Countries with culture write-ups:', existingNames.length);
  console.log(existingNames.sort());
  console.log('\nCountries missing culture write-ups:', missing.length);
  console.log(missing);

  await prisma.$disconnect();
}

checkCulture();
