import CompanionCard from '@/components/CompanionCard';
import CompanionsList from '@/components/CompanionsList';
import CTA from '@/components/CTA';

const Page = () => {
  return (
    <div>
      <h1>Popular Companions</h1>
     <section className='home-section'>
      <CompanionCard
      id='123'
      name='Neura the Brainy Explorer'
      topic='DDDD'
      subject="science"
      duration = {45} 
      color='#ffda6e'
      />
      <CompanionCard
      id='123'
      name='Countsy the Number Wizard'
      subject="science"
      topic='Derivatives & Intertnals'
      duration = {30} 
      color='#e5d0ff'/>
      <CompanionCard
      id='789'
      name='Verba the Vocabulary Builder'
      subject="English Literature"
      topic='language'
      duration = {45} 
      color='#BDE7FF'/>
      
     </section>
     <section className='home-section'>
      <CompanionsList/>
      <CTA/>
     </section>
    </div>
  )
}

export default Page