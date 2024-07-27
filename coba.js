function cetakNama(nama){
    return `Halo, nama saya ${nama}`;
}

const PI = 3.14;

const mahasiswa = {
    nama : 'hero',
    umur : 20,
    cetakMhs(){
        return `halo, nama saya ${this.nama} dan saya ${this.umur} tahun.`;
    }
}

module.exports.cetakNama = cetakNama;
module.exports.PI = PI;
module.exports.mahasiswa = mahasiswa;