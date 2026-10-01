import { useEffect, useRef, useState, type FormEvent } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import Field, { type RegistrationFieldConfig } from './Field';
import { whatsappLink } from '../lib/blue-wave';

const formFields: RegistrationFieldConfig[] = [
  { name: 'child', label: "Child's full name", type: 'text', required: true },
  { name: 'age', label: 'Age', type: 'number', required: true },
  { name: 'parent', label: 'Parent / guardian', type: 'text', required: true },
  { name: 'phone', label: 'WhatsApp / phone', type: 'tel', required: true },
  { name: 'email', label: 'Email', type: 'email', required: false },
  { name: 'date', label: 'Preferred date', type: 'date', required: false },
];

export default function KidsRegistration() {
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);
  const [messageUrl, setMessageUrl] = useState('');
  const [invalidFields, setInvalidFields] = useState<string[]>([]);
  const formRef = useRef<HTMLFormElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const date = formRef.current?.elements.namedItem('date') as HTMLInputElement | null;
    if (date) date.min = new Date().toISOString().slice(0, 10);
  }, []);

  const clearInvalid = (name: string) => {
    setInvalidFields((fields) => fields.filter((field) => field !== name));
    setError('');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = formRef.current;
    if (!form) return;
    const invalid = Array.from(form.elements).filter((element): element is HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement =>
      (element instanceof HTMLInputElement || element instanceof HTMLSelectElement || element instanceof HTMLTextAreaElement)
      && element.willValidate && !element.validity.valid,
    );
    if (invalid.length > 0) {
      setInvalidFields(invalid.map((field) => field.name));
      setError('Please complete the highlighted fields. Check the child’s age is between 3 and 17.');
      invalid[0].focus();
      return;
    }

    setError('');
    setInvalidFields([]);
    const data = new FormData(form);
    const value = (key: string) => String(data.get(key) || '').trim();
    const lines = [
      'Hello Blue Wave! I would like to register my child for a kids surf class.',
      '',
      `Child: ${value('child')} (${value('age')} years old)`,
      `Surf level: ${value('level')}`,
      `Can swim: ${value('swim')}`,
      value('date') ? `Preferred date: ${value('date')}` : null,
      `Parent / guardian: ${value('parent')}`,
      `Phone: ${value('phone')}`,
      value('email') ? `Email: ${value('email')}` : null,
      value('notes') ? `Notes: ${value('notes')}` : null,
    ].filter((line): line is string => line !== null);
    const url = whatsappLink(lines.join('\n'));
    setMessageUrl(url);
    setSent(true);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const resetForm = () => {
    formRef.current?.reset();
    setSent(false);
    setError('');
    setInvalidFields([]);
    window.setTimeout(() => firstFieldRef.current?.focus(), 0);
  };

  return (
    <div className="register" id="register">
      <div className="register-intro">
        <p className="kicker">KIDS REGISTRATION · JACK BEACH</p>
        <h3>Save a spot<br />for your young surfer.</h3>
        <p>Tell us a little about your child. Your details open in WhatsApp, ready to send to the Blue Wave team.</p>
        <img src="/images/kids/coach-waves.jpg" alt="A coach points out the waves to two young surfers" loading="lazy" />
      </div>
      <div className="form-wrap">
        {sent ? (
          <div className="form-success" role="status" tabIndex={-1}>
            <div className="success-mark"><Check size={24} /></div>
            <p className="kicker">REGISTRATION MESSAGE PREPARED</p>
            <h4>Almost done.</h4>
            <p>WhatsApp should have opened with your message ready. Press send to share it with Blue Wave. If it did not open, try the button below.</p>
            <div className="success-actions">
              <a className="button button-dark" href={messageUrl} target="_blank" rel="noopener noreferrer">Open WhatsApp again <ArrowUpRight size={15} /></a>
              <button className="success-again" type="button" onClick={resetForm}>Register another child</button>
            </div>
          </div>
        ) : (
          <>
            <h4>Register your child</h4>
            <p className="form-lede">A few details help us prepare for your child’s session. Required fields are marked.</p>
            <form className="registration-form" ref={formRef} onSubmit={handleSubmit} noValidate>
              <div className="field-row">
                <Field field={formFields[0]} inputRef={firstFieldRef} invalid={invalidFields.includes('child')} onFieldChange={clearInvalid} />
                <Field field={formFields[1]} invalid={invalidFields.includes('age')} min="3" max="17" inputMode="numeric" onFieldChange={clearInvalid} />
              </div>
              <div className="field-row">
                <Field field={formFields[2]} invalid={invalidFields.includes('parent')} autoComplete="name" onFieldChange={clearInvalid} />
                <Field field={formFields[3]} invalid={invalidFields.includes('phone')} autoComplete="tel" placeholder="+212 …" onFieldChange={clearInvalid} />
              </div>
              <div className="field-row">
                <Field field={formFields[4]} invalid={invalidFields.includes('email')} autoComplete="email" onFieldChange={clearInvalid} />
                <Field field={formFields[5]} invalid={invalidFields.includes('date')} onFieldChange={clearInvalid} />
              </div>
              <div className="field">
                <label htmlFor="surf-level">Surf level <span aria-hidden="true">*</span></label>
                <select id="surf-level" name="level" required aria-invalid={invalidFields.includes('level')} onChange={() => clearInvalid('level')}>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                  <option value="Not sure">Not sure</option>
                </select>
              </div>
              <fieldset className="field radio-group" aria-invalid={invalidFields.includes('swim')}>
                <legend>Can your child swim? <span aria-hidden="true">*</span></legend>
                {['Yes', 'A little', 'Not yet'].map((option) => (
                  <label className="radio-option" key={option}>
                    <input type="radio" name="swim" value={option} required onChange={() => clearInvalid('swim')} />
                    <span>{option}</span>
                  </label>
                ))}
              </fieldset>
              <div className="field">
                <label htmlFor="form-notes">Anything we should know? <em>(optional)</em></label>
                <textarea id="form-notes" name="notes" rows={3} placeholder="Allergies, health notes, questions…" />
              </div>
              <label className="consent">
                <input type="checkbox" name="consent" required aria-invalid={invalidFields.includes('consent')} onChange={() => clearInvalid('consent')} />
                <span>I am the parent or legal guardian of this child.</span>
              </label>
              {error && <p className="form-error" role="alert">{error}</p>}
              <button className="button button-dark" type="submit">Prepare WhatsApp message <ArrowUpRight size={15} /></button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}