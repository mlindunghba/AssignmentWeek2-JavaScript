$(document).ready(function() {
    $('#form-submit').append(`
    <div id="form-1">
        <div>
            <label for="">Fullname <sup class="required-symbol">*</sup></label><br>
            <input type="text" id="inputFullname" class="input" placeholder="Masukkan Nama" >
        </div>
        <div>
            <label for="">Email <sup class="required-symbol">*</sup></label><br>
            <input type="text" id="inputEmail" class="input" id="" placeholder="Masukkan Email" >
        </div>
        <div>
            <label for="">Nomor Telepon <sup class="required-symbol">*</sup></label><br>
            <input type="text" id="inputPhone" class="input" placeholder="Masukkan Nomor Telepon" >
        </div>
        <div>
            <label for="">Vacancy <sup class="required-symbol">*</sup></label><br>
            <select id="inputVacancy" class="input" >
                <option value="">- Pilih Lowongan -</option>
            </select>
        </div>
        <div>
            <label for="">Position <sup class="required-symbol">*</sup></label><br>
            <select class="input" id="inputPosition" >
                <option value="">- Pilih Posisi -</option>
            </select>
        </div>
        <div>
            <button type="submit" class="btn" id="btn-submit-form">Kirim</button>
        </div>
    </div>
            `)
    // Loop Select Vacancy
    var vacancy = ['System Administrator', 'Web Developer', 'Mobile Developer'];
    $.each(vacancy, function(i, data) {
        $('#inputVacancy').append('<option>'+data+'</option>')
    });

    var position = ['Kota Bandung', 'Kota Jakarta', 'Kota Surabaya'];
    $.each(position, function(i, data) {
        $('#inputPosition').append('<option>'+data+'</option>')
    });
    var idx = 0
    // Button Submit Form
    $('#form-submit').on('submit', function(e) {
        e.preventDefault()
        let pendaftar = []
        let fullName = []
        let email = []
        let noTelp = []
        let vacancy = []
        let position = []

        console.log(pendaftar)
        stopper = false
        if($('#inputFullname').val().length < 1 || $('#inputFullname').val() == " "){
            $('#inputFullname').css('border', '2px solid red')
            alert('Fullname harus diisi !')
            stopper = true
        }else{
            $('#inputFullname').css('border', '1px solid black')
        }

        if($('#inputEmail').val().length < 1 || $('#inputEmail').val() == " "){
            $('#inputEmail').css('border', '2px solid red')
            alert('Email harus diisi !')
            stopper = true
        }else{
            $('#inputEmail').css('border', '1px solid black')
        }

        if($('#inputPhone').val().length < 1 || $('#inputPhone').val() == " "){
            $('#inputPhone').css('border', '2px solid red')
            alert('Nomor Telepon harus diisi !')
            stopper = true
        }else{
            $('#inputPhone').css('border', '1px solid black')
        }
        
        if($('#inputVacancy').val().length < 1 || $('#inputVacancy').val() == " "){
            $('#inputVacancy').css('border', '2px solid red')
            alert('Vacancy harus diisi !')
            stopper = true
        }else{
            $('#inputVacancy').css('border', '1px solid black')
        }
        
        if($('#inputPosition').val().length < 1 || $('#inputPosition').val() == " "){
            $('#inputPosition').css('border', '2px solid red')
            alert('Position harus diisi !')
            stopper = true
        }else{
            $('#inputPosition').css('border', '1px solid black')
        }

        
        found = false
        
        $.each(email, function(i, val) {
            if(val == $('#inputEmail').val()){
                found = true
                return false
            }
        })

        if(stopper){
            return false
        }

        if (found) {
            $('#inputEmail').css('border', '2px solid red')
            alert('data sudah ada !')
            return false
        } else {
            $('#inputEmail').css('border', '1px solid black')
            fullName[idx] = $('#inputFullname').val()            
            email[idx] = $('#inputEmail').val()            
            noTelp[idx] = $('#inputPhone').val()            
            vacancy[idx] = $('#inputVacancy').val()            
            position[idx] = $('#inputPosition').val()   

            // pendaftar[idx] = [fullName[idx], email[idx], noTelp[idx], vacancy[idx], position[idx]]
            idx++
            alert('Total Pendaftar: '+fullName.length+' Orang')
        }
        
    })
    
});

