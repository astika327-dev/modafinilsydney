import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductDetail from '@/components/products/ProductDetail';

// Static product data - will be replaced with database
const products = [
  {
    id: 'modalert-200',
    name: 'Modalert 200mg',
    slug: 'modalert-200mg',
    category: 'Modafinil',
    manufacturer: 'Sun Pharmaceutical',
    description: "Boost your productivity with Modalert 200mg, Australia's go-to smart choice for sharper focus, longer alertness, and clear-headed energy.",
    longDescription: `
Each Modalert 200 tablet packs a powerful punch with 200mg of Modafinil, a renowned cognitive enhancer and 'smart pill'. It's the go-to choice for boosting productivity, combating fatigue, and fostering mental clarity, ensuring you're at your peak 24/7. Unlike caffeine or amphetamines, Modalert 200 is a reliable productivity enhancer that won't leave you crashing.

**What is Modalert 200mg? 🤔**
Modalert 200mg is used to treat sleep disorders like narcolepsy, sleep apnoea, and shift work sleep disorder (SWSD). It's also a safe choice for those who want to stay awake and maintain their energy levels without the jitteriness and anxiety associated with caffeine or amphetamines. Each tablet delivers long-lasting results, keeping you energised, active, and focused for up to 15 hours.

**Why Aussies Love Modalert 200mg 💖💪🏻**
- Enhances focus, memory, mental clarity and ability to stay awake
- Long-lasting alertness without the crash or burnout
- No cravings or addiction concerns
- Sustained effects providing reliable energy and focus

**Who Uses Modalert 200?**
- Students during long study periods for exams
- Shift workers staying up all night
- Tradies working long hours on job deadlines
- People with ADHD who need to focus
- Professionals who need the edge

**How Modalert 200mg Works**
Modafinil stimulates the brain's hypothalamus to increase dopamine levels and enhance alertness. When dopamine levels are high, you feel in a better mood and perform like a superstar. You'll be awake, alert, and on your game without the nerves or jittery effects. Many report clearer thinking, improved problem-solving, better coordination, and more effective decision-making.

**Standard Dosage**
- **Standard Dose:** 1 tablet (200mg) per day, taken in the morning
- **Duration:** Effects last 10-15 hours
- **Max:** Do not exceed 400mg in 24 hours
- Newbies should start with 100mg and adjust based on how you feel

**How to Take Modalert 200 Safely**
- Take with a full glass of water on an empty stomach
- Avoid use late in the day (may cause insomnia)
- Stay hydrated and avoid skipping meals
- Avoid alcohol while using Modalert
- Store below 30°C in a dry place

**Possible Side Effects**
Most people tolerate Modalert well with little or no side effects. Watch for: headache, dry mouth, dizziness, nausea, anxiety, or trouble sleeping.

**Modalert vs Other Smart Drugs**
Manufactured by Sun Pharmaceutical, one of the world's largest pharmaceutical companies, Modalert stands out for its consistency and reliability. A popular alternative to Adderall, Ritalin & caffeine – and you can buy it online!
    `,
    image: '/images/Modalert-200mg.webp',
    images: ['/images/Modalert-200mg.webp'],
    badge: 'bestseller',
    rating: 4.9,
    reviews: 47,
    variants: [
      { id: 'modalert-200-30', name: '30 pills', price: 120, quantity: 30, perPill: 4.00, stock: 100 },
      { id: 'modalert-200-50', name: '50 pills', price: 200, quantity: 50, perPill: 4.00, stock: 100 },
      { id: 'modalert-200-100', name: '100 pills', price: 350, quantity: 100, perPill: 3.50, stock: 100 },
      { id: 'modalert-200-200', name: '200 pills', price: 600, quantity: 200, perPill: 3.00, stock: 100 },
      { id: 'modalert-200-300', name: '300 pills', price: 750, quantity: 300, perPill: 2.50, stock: 100 },
      { id: 'modalert-200-500', name: '500 pills', price: 1000, quantity: 500, perPill: 2.00, stock: 100 },
    ],
  },
  {
    id: 'modalert-100',
    name: 'Modalert 100mg',
    slug: 'modalert-100mg',
    category: 'Modafinil',
    manufacturer: 'Sun Pharmaceutical',
    description: "Power through your day with Modalert 100mg, the trusted Modafinil brand that keeps Aussies switched on and smashing goals.",
    longDescription: `
When you need a safe, effective way to stay alert, focused, and ahead of the game, Modalert 100mg is your go-to solution. Whether you're a busy professional, a student pulling late-night study sessions, or just someone looking to perform at their best, Modalert 100 has earned its reputation as one of the world's most trusted Modafinil brands.

Unlike caffeine or sugary energy drinks, Modalert 100mg provides a smoother, more sustained sense of wakefulness without the jitters or crash. It's the preferred choice for people seeking mental clarity and productivity in a safe and reliable way.

**What Is Modalert 100mg?**
Modalert 100mg contains Modafinil, a clinically proven wakefulness-promoting medication originally developed for conditions such as narcolepsy, obstructive sleep apnoea, and shift work sleep disorder. Each tablet delivers 100mg of pure Modafinil, making it a lower-dose option that gives users more control over their experience. Perfect for those new to modafinil or seeking a lighter, more flexible dose.

**Why Aussies Love Modalert 100mg**
Australians are known for living life to the fullest, but balancing long workdays, studies, family, and fitness can be a lot. Modalert 100mg has become a favourite because it helps people perform at their best without feeling wired or anxious. Whether you're working from home, running a business, studying at uni, or doing FIFO shifts, Modalert 100mg fits right in with the Aussie lifestyle.

**How Modalert 100mg Works**
Modalert works by targeting specific neurotransmitters in the brain to promote wakefulness and cognitive function. It's not a traditional stimulant like amphetamines or caffeine. Instead, Modafinil gently increases dopamine levels and stimulates the central nervous system in a controlled way, allowing users to feel alert and focused without the rapid heart rate or "crash" associated with other stimulants.

**Who Uses Modalert 100mg?**
Modalert 100mg isn't just for people with diagnosed sleep conditions. Across Australia, it's become popular with high-performing professionals, university students, entrepreneurs, and even athletes who want a mental edge. FIFO workers and shift workers especially love it for helping them manage irregular sleep schedules and long nights.

**Benefits of Modalert 100mg**
- **Boosts Focus and Mental Clarity:** Perfect for study sessions, big projects, and critical thinking
- **Improves Wakefulness:** Stay sharp and alert during long work hours or late nights
- **Enhances Productivity:** Get more done in less time, without distractions or fatigue
- **Gentle and Non-Jittery:** Unlike energy drinks, Modalert offers a smoother experience
- **Affordable and Reliable:** Trusted brand that delivers consistent quality

**Dosage and How to Use**
Modalert 100mg is typically taken once per day in the morning or before a shift. Most people start with one tablet (100mg) and adjust based on their needs. Because of its long-lasting effects (up to 12-14 hours), it's best not to take Modalert late in the day to avoid disrupting sleep.

**Modalert vs. Other Modafinil Brands**
Modalert stands out for its consistency and reliability. Manufactured by Sun Pharma, one of the largest pharmaceutical companies in the world, you can trust its quality and effectiveness. If you're new to Modafinil, Modalert 100mg is the perfect way to start, offering a gentle but effective boost.
    `,
    image: '/images/Modalert-100-1-scaled.webp',
    images: ['/images/Modalert-100-1-scaled.webp'],
    badge: 'popular',
    rating: 4.92,
    reviews: 32,
    variants: [
      { id: 'modalert-100-30', name: '30 pills', price: 69, quantity: 30, perPill: 2.30, stock: 100 },
      { id: 'modalert-100-50', name: '50 pills', price: 96, quantity: 50, perPill: 1.92, stock: 100 },
      { id: 'modalert-100-100', name: '100 pills', price: 155, quantity: 100, perPill: 1.55, stock: 100 },
      { id: 'modalert-100-200', name: '200 pills', price: 259, quantity: 200, perPill: 1.30, stock: 100 },
      { id: 'modalert-100-300', name: '300 pills', price: 338, quantity: 300, perPill: 1.13, stock: 100 },
      { id: 'modalert-100-500', name: '500 pills', price: 540, quantity: 500, perPill: 1.08, stock: 100 },
    ],
  },
  {
    id: 'modafresh',
    name: 'Modafresh 200mg',
    slug: 'modafresh-200mg',
    category: 'Modafinil',
    manufacturer: 'Sunrise Remedies',
    description: "Power through your busiest days with Modafresh 200mg. Sharp focus, steady energy, and clean-minded alertness without the jitters.",
    longDescription: `
If you've been looking for a clean, no-fuss way to stay switched on when the day or night gets too heavy, Modafresh 200 has become a go-to option Aussies keep coming back to. It's a popular generic form of Modafinil that's known for steady, clear-headed alertness rather than the spiky buzz and messy crash you can get from energy drinks or too much coffee.

**What Is Modafresh 200?**
Modafresh 200 is a generic brand of Modafinil, a wakefulness-promoting medicine commonly prescribed for conditions such as narcolepsy and shift work sleep disorder. Each tablet contains 200mg of Modafinil, manufactured to pharmaceutical standards for consistency and reliability. Many people report better attention, mental stamina, and reduced fatigue.

**Why Australians Are Choosing Modafresh 200**
What people like about Modafresh isn't a hyper, jittery stimulant feeling — it's the smoother kind of "I can actually get through this" energy. Busy professionals, uni students, FIFO workers, healthcare staff, and anyone working odd hours often describe it as focus that holds steady rather than bouncing all over the place.

**How Modafresh 200 Supports Focus and Wakefulness**
Modafinil works through multiple brain pathways involved in wakefulness and attention. Most people notice effects around 45-60 minutes after taking it, with a long, steady window that can last much of the day. That's why it's commonly associated with deep work, long shifts, travel fatigue, and study sessions.

**What to Expect from Modafresh**
Users describe Modafresh as "clear-minded energy" — you're awake, switched on, and less distracted, without feeling spun out. People often report improved concentration, better follow-through, stronger mental organisation, and a calmer kind of productivity that makes tasks feel more manageable.

**Safe and Smart Use**
For many adults, a single 200mg dose taken early in the day is the standard approach. If you're new to modafinil, some clinicians advise starting lower (half a tablet) to check tolerance. Avoid late-day dosing because sleep disruption is one of the most common issues. Always take with water and keep caffeine sensible.

**Who Uses Modafresh Around Australia**
From Sydney corporate teams and Melbourne tech workers to regional tradies, night-shift staff, and FIFO crews doing big swings. Students around Adelaide and Brisbane talk about it during exam season, while travellers use it to cope with brutal time zones. The common thread: long days, real responsibilities, and the need to stay sharp.

**Modafresh vs Other Modafinil Brands**
Compared with Modalert or Modvigil, Modafresh is often talked about as having a steady onset and consistent duration. Many people choose Modafresh when they want something that feels predictable and "smooth" rather than strong and edgy. They all share the same active ingredient, but at the end of the day it's your choice and preference.

**Possible Side Effects**
Most side effects are mild when dosing is sensible: headache, nausea, dry mouth, reduced appetite, and trouble sleeping if taken too late. Hydration, food, and cutting back on caffeine can help. Seek medical advice if anything feels off or intense.

**Quick FAQs 💡**
- **Is Modafresh addictive?** When used responsibly, no. Stick to safe limits and take breaks.
- **What does it feel like?** Enhanced alertness, drive, and cognitive speed — without jitters.
- **Is 200mg too strong?** For beginners, consider starting with half a tablet.
- **Can I take it daily?** Best used occasionally for high-demand tasks.
- **Do you ship Australia-wide?** Yes, with fast, discreet delivery to all states and territories.
    `,
    image: '/images/Modafresh-200-4-scaled.webp',
    images: ['/images/Modafresh-200-4-scaled.webp'],
    rating: 4.8,
    reviews: 28,
    variants: [
      { id: 'modafresh-30', name: '30 pills', price: 75, quantity: 30, perPill: 2.50, stock: 100 },
      { id: 'modafresh-50', name: '50 pills', price: 110, quantity: 50, perPill: 2.20, stock: 100 },
      { id: 'modafresh-100', name: '100 pills', price: 164, quantity: 100, perPill: 1.64, stock: 100 },
      { id: 'modafresh-200', name: '200 pills', price: 273, quantity: 200, perPill: 1.37, stock: 100 },
      { id: 'modafresh-300', name: '300 pills', price: 383, quantity: 300, perPill: 1.28, stock: 100 },
      { id: 'modafresh-500', name: '500 pills', price: 585, quantity: 500, perPill: 1.17, stock: 100 },
    ],
  },
  {
    id: 'modvigil',
    name: 'Modvigil 200mg',
    slug: 'modvigil-200mg',
    category: 'Modafinil',
    manufacturer: 'HAB Pharmaceuticals',
    description: "Your 'get it done' switch with clean wakefulness, crisp focus, and steady drive. Super affordable and Aussie-trusted.",
    longDescription: `
Modvigil 200mg is your "get it done" switch with clean wakefulness, crisp focus, and the kind of steady drive that makes busy days feel manageable. When coffee stops working and the pressure's on—deadlines, shift work, exams, travel—this is the reliable edge people come back for.

**What Is Modvigil 200?**
Modvigil 200mg is one of the best, cost-effective and potent types of generic Modafinil tablets you can buy to help with ADHD, sleep issues like narcolepsy, obstructive sleep apnea, and shift-work sleep disorders. In Australia, people purchase Modvigil 200 as an affordable nootropic for cognitive enhancement, increased alertness, and improved productivity throughout their workday, shifts, or exams.

**How Does Modvigil 200 Work?**
Modafinil, the active ingredient in Modvigil 200, works by increasing the level of serotonin in the brain, which has a direct impact on focus, cognitive function and alertness. Your dopamine levels rise, and as a result, you find that you're more euphoric, alert, awake and ready to tackle the world. Unlike traditional stimulants like coffee, Modvigil 200 has a lower risk of dependency and fewer side effects. The effects typically begin within 15-30 minutes and can last up to 12-15 hours.

**Why Aussies Love Modvigil 200 💖💪🏻**

**1. Super-cheap**
Modvigil 200 is not just effective, it's also one of the most affordable generic Modafinil options—often priced 30-50% less than Modalert 200 or Provigil. For Aussies on a tight budget, Modvigil is the smart choice.

**2. Smooth Onset with Consistent Effects**
Modvigil 200 has a gentler, softer onset compared to Modalert 200, with fewer jittery and anxious side effects. You'll find that you're at your super peak roughly 2 to 3 hours after taking it, and it will last a further 8 or so hours.

**3. A Trusted and Proven Drug**
Modvigil 200 has been helping Aussies for many years and has stood the test of time because it works. From Perth to Sydney, Adelaide to Darwin—Modvigil 200 is the go-to option for Australians wanting the competitive edge.

**4. Readily Available and Fast Delivery**
Due to its popularity in Australia, Modvigil 200 is readily available and can be easily purchased online through Modafinil Sydney, with quick delivery and discreet packaging.

**Who Buys Modvigil 200 in Australia?**
- **Shift workers:** Night packers, police, traders, doctors, nurses, chefs, factory workers
- **Students:** Studying or prepping for exams
- **Parents:** Juggling work and home life
- **Professionals:** Dentists, lawyers, doctors, accountants needing focus
- **Taxi and Uber drivers:** Getting through late-night shifts

**Dosage & Usage Tips**
- Start with 100mg and see how your body reacts
- 200mg once daily in the morning is advised
- Night-shift workers should take it an hour before starting
- Don't exceed 400mg in 24 hours
- Empty stomach means quick-acting effect
- Hydrate consistently—may cause dry mouth
- Limit dosage to 1 to 3 times per week to avoid building resistance

**Side Effects & Precautions**
Common side effects include headache, nausea, slight vertigo, dry mouth, insomnia (if taken late), anxiety, and hand tremors. Rare but severe: body rash, allergic reactions, mood changes. Medical conditions to treat with caution: heart problems, high blood pressure, psychiatric illness, liver or kidney disease.
    `,
    image: '/images/Modvigil-200-5-scaled.webp',
    images: ['/images/Modvigil-200-5-scaled.webp'],
    rating: 4.83,
    reviews: 35,
    variants: [
      { id: 'modvigil-30', name: '30 pills', price: 83, quantity: 30, perPill: 2.77, stock: 100 },
      { id: 'modvigil-50', name: '50 pills', price: 117, quantity: 50, perPill: 2.34, stock: 100 },
      { id: 'modvigil-100', name: '100 pills', price: 203, quantity: 100, perPill: 2.03, stock: 100 },
      { id: 'modvigil-200', name: '200 pills', price: 365, quantity: 200, perPill: 1.83, stock: 100 },
      { id: 'modvigil-300', name: '300 pills', price: 462, quantity: 300, perPill: 1.54, stock: 100 },
      { id: 'modvigil-500', name: '500 pills', price: 720, quantity: 500, perPill: 1.44, stock: 100 },
    ],
  },
  {
    id: 'modawake',
    name: 'Modawake 200mg',
    slug: 'modawake-200mg',
    category: 'Modafinil',
    manufacturer: 'HAB Pharmaceuticals',
    description: "Strong, long lasting focus and clean energy. Premium Modafinil trusted by students, professionals, and shift workers.",
    longDescription: `
Buy Modawake 200mg online in Australia for strong, long lasting focus, clean energy, and that "switched on" feeling when your day can't afford a slump. Modawake 200 is a premium Modafinil option trusted by students, professionals, and shift workers who want steady alertness without the messy caffeine crash.

**What Is Modawake 200mg?**
Looking for a reliable way to stay focused, alert, and productive without the jittery buzz of coffee or energy drinks? Modawake 200mg is a trusted generic of modafinil, offering sustained clarity and energy—perfect for long hours at work, late-night study sessions, or demanding schedules. It delivers a clean, dependable boost in wakefulness and mental clarity, typically lasting around 12 to 15 hours.

It contains 200mg of Modafinil, a wake-promoting medication commonly prescribed for conditions such as narcolepsy, obstructive sleep apnea, and shift work sleep disorder. Widely used off-label for enhancing focus and cognitive performance during extended mental tasks. Unlike stimulants, Modawake doesn't induce overstimulation; instead, it encourages calm and steady alertness.

**How It Works**
While the precise mechanism isn't fully mapped out, modafinil appears to influence brain chemicals like dopamine, norepinephrine, and histamine, helping regulate the wake-sleep cycle. It boosts mental stamina without the peaks and troughs associated with caffeine or other stimulants. This translates to clear thinking, better focus, and awareness without overexcitement.

**Why Australians Rely on Modawake 200 😊**
Australians value Modawake for its consistency and minimal side effects. Whether battling demanding shifts, intense study routines, or simply seeking mental stamina, users appreciate the reliable, extended support it provides:
- Prolonged wakefulness—no need for multiple doses or caffeine crutches
- Improved concentration, memory, energy, and mood stability
- A smoother experience compared to traditional stimulants

**Quick Benefits**
- Extended duration of wakefulness and mental clarity
- Lower risk of jitteriness or energy crashes
- Enhanced productivity, especially for long or irregular schedules
- Clean support for focus and cognitive resilience

**Side Effects & Precautions**
Like any medication, Modawake 200 can cause mild side effects, including headache, nausea, dizziness, or trouble sleeping if taken late in the day. Though rare, more serious reactions can occur. Always start with the recommended dose. Consult a healthcare professional if you're on other medication or have health concerns.

**How to Use Modawake 200 Safely**
- Take one 200mg tablet in the morning—or at least one hour before a night shift
- Stick to one dose per 24 hours—more doesn't mean better
- Stay well-hydrated to support effectiveness
- Avoid alcohol, which can reduce effectiveness and heighten side effects
- Store it below 25°C in a dry, dark place
    `,
    image: '/images/modawake-200mg.webp',
    images: ['/images/modawake-200mg.webp'],
    rating: 4.8,
    reviews: 24,
    variants: [
      { id: 'modawake-30', name: '30 pills', price: 75, quantity: 30, perPill: 2.50, stock: 100 },
      { id: 'modawake-50', name: '50 pills', price: 101, quantity: 50, perPill: 2.02, stock: 100 },
      { id: 'modawake-100', name: '100 pills', price: 195, quantity: 100, perPill: 1.95, stock: 100 },
      { id: 'modawake-200', name: '200 pills', price: 327, quantity: 200, perPill: 1.64, stock: 100 },
      { id: 'modawake-300', name: '300 pills', price: 427, quantity: 300, perPill: 1.42, stock: 100 },
      { id: 'modawake-500', name: '500 pills', price: 650, quantity: 500, perPill: 1.30, stock: 100 },
    ],
  },
  {
    id: 'modasmart',
    name: 'Modasmart 400mg',
    slug: 'modasmart-400mg',
    category: 'Modafinil',
    manufacturer: 'Centurion Laboratories',
    description: "If 200mg feels like it's not cutting it, Modafinil 400mg is the step up serious users go for. Stop fighting fatigue the hard way and go straight to the strength that keeps you switched on.",
    longDescription: `
If you're here because you're exhausted all the time, you're not alone. When daytime sleepiness is so intense that it affects work, driving, studying, or even basic motivation, you start looking for something that actually helps, not another "try more coffee" suggestion. Modafinil 400 is used for real sleep-related conditions, and for some people, it can make day-to-day life feel manageable again. Modafinil 400mg is considered a higher daily dose, so it's best approached carefully and sensibly, ideally with medical guidance.

**What Modafinil Is Used For**
Modafinil is a prescription medicine used to improve wakefulness in people with conditions like narcolepsy, obstructive sleep apnoea (where sleep quality is disrupted), and shift work sleep disorder in some instances. The goal is straightforward: help you stay awake and function through the day, not give you a "buzz" or replace proper sleep treatment.

**What "400mg" Really Means**
A doctor will usually start with a lower daily dose and only increase it if you still have excessive sleepiness and are tolerating it well. This approach helps you feel more confident and safe when considering a total of 400mg daily, which is generally reserved for cases where standard doses aren't enough. It's about finding the right balance that helps without causing side effects.

**What It Can Feel Like When It's Working**
When Modafinil suits you, it often feels like the fog lifts. You're still you, just more present. People commonly describe being able to concentrate longer, get through tasks without constant breaks, and stay awake in situations where they would usually struggle. You're not meant to feel "wired." The best result is calm, steady alertness.

**Modafinil 100, 200 vs A 400mg Daily Total**
A 100mg or 200mg daily dose is often treated as the more common starting point. A total of 400mg daily may be considered if symptoms are still breaking through and your prescriber feels the benefits outweigh the risks. If you've tried lower strengths and you're still battling heavy sleepiness, that's when a higher daily plan might come up in conversation with a doctor.

**How It's Usually Taken**
For narcolepsy or daytime sleepiness linked to sleep apnoea, Modafinil 400 is commonly taken earlier in the day. For shift work sleep disorder, it may be taken before a shift, as directed by your prescriber. Tablets are typically swallowed whole with water. Timing matters a lot because taking it too late can disrupt sleep and create a frustrating cycle.

**If You Miss A Dose**
If you forget your dose and it's already later in the day, it's usually safer to skip it rather than take it close to bedtime. Trying to "catch up" can backfire by wrecking your sleep that night. If you often miss doses, that's a sign your routine might need a slight adjustment to make it easier to stay consistent.

**Don't Take More Than You're Meant To**
It's tempting to think "one more will fix it," but that's where people often run into trouble. Taking more than prescribed increases the chances of headaches, anxiety, irritability, insomnia, and feeling overstimulated. If you're not getting the result you need, the safer move is to reassess the plan rather than increase the dose yourself.

**How Long Have People Used It For**
Some people use Modafinil 400 for the long term under medical supervision, especially with conditions like narcolepsy. Others only use it during periods where symptoms are worse, or when shift work is intense. There isn't one perfect timeline. What matters is using it in a way that supports your health, your sleep, and your daily functioning.

**Can It Become Habit Forming**
When used appropriately, many people take Modafinil 400 without developing problems. The risk usually increases when people start using it like a lifestyle shortcut, take higher amounts than recommended, or rely on it to cover up chronic sleep debt. Keeping it sensible, using it as directed, and treating your sleep routine seriously helps prevent that slide.

**Key Things To Be Careful With**
If you develop a rash, swelling, breathing difficulty, or feel seriously unwell after taking it, stop and get urgent medical advice. Also, be cautious if you have a history of anxiety, mood changes, heart issues, or high blood pressure, because stimulatory medicines can sometimes aggravate those areas.

**Alcohol, Driving, And Everyday Safety**
A lot of people avoid alcohol while using Modafinil because it can make the way you feel less predictable. And while Modafinil 400 can improve alertness, you should still only drive or operate tools if you personally feel clear, calm, and steady. Especially at higher strengths, it's smart to learn how your body reacts before doing anything risky.

**Pregnancy, Breastfeeding, And Contraception 🤰**
If pregnancy or breastfeeding is relevant, you should get medical advice before using Modafinil 400 (especially because it's such a high dose). It can also reduce the effectiveness of some hormonal contraception, so it's essential to make sure you're using reliable protection.

**Medication Interactions To Watch**
Modafinil can interact with other medicines, including some that affect mood, sleep, hormones, and blood clotting. If you take regular medications or supplements, it's essential to be upfront about them so you don't mix things that don't play well together.

**Common Side Effects People Notice**
Some people get headaches, nausea, dry mouth, reduced appetite, mild anxiety, irritability, or trouble sleeping. These effects are often dose- and timing-dependent. Monitoring how you feel and discussing persistent or worsening side effects with a health professional can help you stay in control.

**Serious Side Effects That Need Fast Help ⚠️**
Seek urgent medical help if you experience chest pain, severe agitation, confusion, hallucinations, suicidal thoughts, severe rash, or swelling of the face or throat. Those aren't "normal side effects" and shouldn't be ignored.

If you're looking for a real solution, you deserve a process that feels straightforward and respectful. We're here for people who want clear information, discreet handling, and a hassle-free, honest buying experience without any dramas. Choose the option that fits your needs, keep it sensible with dose and timing, and focus on the real goal: feeling steady, capable, and awake again, day after day.
    `,
    image: '/images/Modasmart-400-2-scaled.webp',
    images: ['/images/Modasmart-400-2-scaled.webp'],
    badge: 'new',
    rating: 5.0,
    reviews: 18,
    variants: [
      { id: 'modasmart-50', name: '50 pills', price: 152, quantity: 50, perPill: 3.04, stock: 100 },
      { id: 'modasmart-100', name: '100 pills', price: 244, quantity: 100, perPill: 2.44, stock: 100 },
      { id: 'modasmart-200', name: '200 pills', price: 411, quantity: 200, perPill: 2.06, stock: 100 },
      { id: 'modasmart-300', name: '300 pills', price: 548, quantity: 300, perPill: 1.83, stock: 100 },
      { id: 'modasmart-400', name: '400 pills', price: 685, quantity: 400, perPill: 1.71, stock: 100 },
      { id: 'modasmart-500', name: '500 pills', price: 792, quantity: 500, perPill: 1.58, stock: 100 },
    ],
  },
  {
    id: 'modafinil-400',
    name: 'Modafinil 400mg Australia',
    slug: 'modafinil-400mg-australia',
    category: 'Modafinil',
    manufacturer: 'Sun Pharmaceutical',
    description: "If 200mg feels like it's not cutting it, Modafinil 400mg is the step up serious users go for. Ships Australia-wide, fast and discreet.",
    longDescription: `
If 200mg feels like it's not cutting it, Modafinil 400mg is the step up serious users go for. Modafinil Sydney ships Australia-wide, fast and discreet, so you can order once and get on with your week. Stop fighting fatigue the hard way and go straight to the strength that keeps you switched on. Buy Modafinil 400 online and get it delivered ASAP!

**Do you want to buy Modafinil 400mg?**
If you're here because you're exhausted all the time, you're not alone. When daytime sleepiness is so intense that it affects work, driving, studying, or even basic motivation, you start looking for something that actually helps, not another "try more coffee" suggestion. Modafinil 400 is used for real sleep-related conditions, and for some people, it can make day-to-day life feel manageable again. Modafinil 400mg is considered a higher daily dose, so it's best approached carefully and sensibly, ideally with medical guidance.

**What Modafinil Is Used For**
Modafinil is a prescription medicine used to improve wakefulness in people with conditions like narcolepsy, obstructive sleep apnoea (where sleep quality is disrupted), and shift work sleep disorder in some instances. The goal is straightforward: help you stay awake and function through the day, not give you a "buzz" or replace proper sleep treatment.

**What "400mg" Really Means**
A doctor will usually start with a lower daily dose and only increase it if you still have excessive sleepiness and are tolerating it well. This approach helps you feel more confident and safe when considering a total of 400mg daily, which is generally reserved for cases where standard doses aren't enough. It's about finding the right balance that helps without causing side effects.

**What It Can Feel Like When It's Working**
When Modafinil suits you, it often feels like the fog lifts. You're still you, just more present. People commonly describe being able to concentrate longer, get through tasks without constant breaks, and stay awake in situations where they would usually struggle. You're not meant to feel "wired." The best result is calm, steady alertness.

**Modafinil 100, 200 vs A 400mg Daily Total**
A 100mg or Modafinil 200mg daily dose is often treated as the more common starting point. A total of 400mg daily may be considered if symptoms are still breaking through and your prescriber feels the benefits outweigh the risks. If you've tried lower strengths and you're still battling heavy sleepiness, that's when a higher daily plan might come up in conversation with a doctor.

**How It's Usually Taken**
For narcolepsy or daytime sleepiness linked to sleep apnoea, Modafinil 400 is commonly taken earlier in the day. For shift work sleep disorder, it may be taken before a shift, as directed by your prescriber. Tablets are typically swallowed whole with water. Timing matters a lot because taking it too late can disrupt sleep and create a frustrating cycle.

**If You Miss A Dose**
If you forget your dose and it's already later in the day, it's usually safer to skip it rather than take it close to bedtime. Trying to "catch up" can backfire by wrecking your sleep that night. If you often miss doses, that's a sign your routine might need a slight adjustment to make it easier to stay consistent.

**Don't Take More Than You're Meant To**
It's tempting to think "one more will fix it," but that's where people often run into trouble. Taking more than prescribed increases the chances of headaches, anxiety, irritability, insomnia, and feeling overstimulated. If you're not getting the result you need, the safer move is to reassess the plan rather than increase the dose yourself.

**How Long Have People Used It For**
Some people use Modafinil 400 for the long term under medical supervision, especially with conditions like narcolepsy. Others only use it during periods where symptoms are worse, or when shift work is intense. There isn't one perfect timeline. What matters is using it in a way that supports your health, your sleep, and your daily functioning.

**Can It Become Habit Forming**
When used appropriately, many people take Modafinil 400 without developing problems. The risk usually increases when people start using it like a lifestyle shortcut, take higher amounts than recommended, or rely on it to cover up chronic sleep debt. Keeping it sensible, using it as directed, and treating your sleep routine seriously helps prevent that slide.

**Key Things To Be Careful With**
If you develop a rash, swelling, breathing difficulty, or feel seriously unwell after taking it, stop and get urgent medical advice. Also, be cautious if you have a history of anxiety, mood changes, heart issues, or high blood pressure, because stimulatory medicines can sometimes aggravate those areas. If any of that applies to you, a proper chat with a doctor is worth it before stepping up to a higher daily strength.

**Alcohol, Driving, And Everyday Safety**
A lot of people avoid alcohol while using Modafinil because it can make the way you feel less predictable. And while Modafinil 400 can improve alertness, you should still only drive or operate tools if you personally feel clear, calm, and steady. Especially at higher strengths, it's smart to learn how your body reacts before doing anything risky. So start small and go from there. Don't be a super hero and go for a bigger dose to start with.

**Pregnancy, Breastfeeding, And Contraception 🤰**
If pregnancy or breastfeeding is relevant, you should get medical advice before using Modafinil 400 (especially because it's such a high dose). It can also reduce the effectiveness of some hormonal contraception, so it's essential to make sure you're using reliable protection and not guessing.

**Medication Interactions To Watch**
Modafinil can interact with other medicines, including some that affect mood, sleep, hormones, and blood clotting. If you take regular medications or supplements, it's essential to be upfront about them so you don't mix things that don't play well together.

**Common Side Effects People Notice**
Some people get headaches, nausea, dry mouth, reduced appetite, mild anxiety, irritability, or trouble sleeping. These effects are often dose- and timing-dependent. Monitoring how you feel and discussing persistent or worsening side effects with a health professional can help you stay in control and safe while using Modafinil 400.

**Serious Side Effects That Need Fast Help ⚠️**
Seek urgent medical help if you experience chest pain, severe agitation, confusion, hallucinations, suicidal thoughts, severe rash, or swelling of the face or throat. Those aren't "normal side effects" and shouldn't be ignored.

**Getting Modafinil from Modafinil Sydney 👍**
If you're looking for a real solution, you deserve a process that feels straightforward and respectful. Modafinil Sydney is here for people who want clear information, discreet handling, and a hassle free, honest buying experience without any dramas. If you're ready to move forward, choose the option that fits your needs, keep it sensible with dose and timing, and focus on the real goal: feeling steady, capable, and awake again, day after day.
    `,
    image: '/images/Modasmart-400-2-scaled.webp',
    images: ['/images/Modasmart-400-2-scaled.webp'],
    badge: 'new',
    rating: 4.95,
    reviews: 12,
    variants: [
      { id: 'modafinil-400-50', name: '50 pills', price: 152, quantity: 50, perPill: 3.04, stock: 100 },
      { id: 'modafinil-400-100', name: '100 pills', price: 244, quantity: 100, perPill: 2.44, stock: 100 },
      { id: 'modafinil-400-200', name: '200 pills', price: 411, quantity: 200, perPill: 2.06, stock: 100 },
      { id: 'modafinil-400-300', name: '300 pills', price: 548, quantity: 300, perPill: 1.83, stock: 100 },
      { id: 'modafinil-400-400', name: '400 pills', price: 685, quantity: 400, perPill: 1.71, stock: 100 },
      { id: 'modafinil-400-500', name: '500 pills', price: 792, quantity: 500, perPill: 1.58, stock: 100 },
    ],
  },
];

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);
  
  if (!product) {
    return { title: 'Product Not Found' };
  }

  return {
    title: `${product.name} | ModafinilSydney`,
    description: product.description,
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
