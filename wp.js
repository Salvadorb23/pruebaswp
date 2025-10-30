const supabaseUrl = 'https://qzwwdflnjfnjaavlaqwr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6d3dkZmxuamZuamFhdmxhcXdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE3NjQzMTYsImV4cCI6MjA3NzM0MDMxNn0.hFRYPNvLKZ8d3dydSCZRBtyOS97aLwnhAqJvNwI4JCU'
const supabase = supabase.createClient(supabaseUrl, supabaseKey)

document.getElementById('formulario').addEventListener('submit', async (event) => {
    event.preventDefault()

    const phone = document.getElementById('phone_number').value.trim()
    const birthDate = document.getElementById('birth_date').value.trim()
    const responseElement = document.getElementById('response')

    if (!phone || !birthDate) {
        responseElement.textContent = 'Por favor complete todos los campos.'
        responseElement.style.color = 'red'
        return
    }

    const { data, error } = await supabase
        .from('whatsapp_backups')
        .insert([{ phone_number: phone, birth_date: birthDate }])

    if (error) {
        responseElement.textContent = 'Error al guardar datos, intente de nuevo.'
        responseElement.style.color = 'red'
    } else {
        responseElement.textContent = 'Datos guardados con éxito. Gracias por verificar!'
        responseElement.style.color = 'green'
        event.target.reset()
    }
})
