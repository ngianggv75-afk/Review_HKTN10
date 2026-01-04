const quizData = [
    { q: "Nhóm nguyên tố nào sau đây thuộc nhóm nguyên tố vi lượng?", options: ["C, H, O, N", "Mn, B, Cu, Zn, Fe", "Ca, P, K, S", "C, O, K, Mg"], correct: 1, hint: "Nguyên tố vi lượng chiếm tỉ lệ nhỏ hơn 0,01% khối lượng khô." },
    { q: "Vai trò chủ yếu của các nguyên tố vi lượng là:", options: ["Cấu tạo nên các đại phân tử hữu cơ", "Cấu tạo nên bộ khung xương tế bào", "Thành phần cấu tạo hoặc hoạt hóa enzyme", "Nguồn dự trữ năng lượng chính"], correct: 2, hint: "Chúng thường tham gia vào cấu tạo enzyme, hormone, vitamin." },
    { q: "Đặc điểm nào của phân tử nước giúp nó có tính phân cực?", options: ["Có 2 nguyên tử O và 1 H", "Đầu O tích điện âm, đầu H tích điện dương một phần", "Tồn tại ở ba trạng thái", "Liên kết Hydrogen luôn bền vững"], correct: 1, hint: "Do độ âm điện của O lớn hơn H nên cặp electron bị lệch về phía O." },
    { q: "Để nhận biết đường khử (glucose), người ta dùng thuốc thử nào?", options: ["Dung dịch Iodine", "Dung dịch Biuret", "Dung dịch Benedict", "Dung dịch Ethanol"], correct: 2, hint: "Thuốc thử Benedict sẽ tạo kết tủa đỏ gạch khi đun nóng với đường khử." },
    { q: "Trong phản ứng Biuret nhận biết protein, xuất hiện màu gì?", options: ["Đỏ gạch", "Xanh lam", "Tím", "Vàng"], correct: 2, hint: "Phức chất giữa Cu2+ và liên kết peptide có màu tím đặc trưng." },
    { q: "Đại phân tử hữu cơ nào chiếm tỉ lệ khối lượng khô lớn nhất?", options: ["Carbohydrate", "Lipid", "Protein", "Nucleic acid"], correct: 2, hint: "Protein là thành phần cấu trúc và chức năng chính của tế bào." },
    { q: "Đơn phân của protein là gì?", options: ["Glucose", "Amino acid", "Nucleotide", "Fatty acid"], correct: 1, hint: "Protein được cấu tạo từ khoảng 20 loại amino acid." },
    { q: "Bản chất của hầu hết các enzyme là gì?", options: ["Polysaccharide", "Lipid", "Protein", "Nucleic acid"], correct: 2, hint: "Enzyme là chất xúc tác sinh học có bản chất là protein." },
    { q: "Cấu trúc nào được ví như 'nhà máy năng lượng' của tế bào?", options: ["Nhân", "Lưới nội chất", "Ti thể", "Ribosome"], correct: 2, hint: "Ti thể là nơi diễn ra quá trình hô hấp tế bào tạo ATP." },
    { q: "Thành phần chính của màng sinh chất là gì?", options: ["Protein và Nucleic acid", "Lớp kép phospholipid và protein", "Carbohydrate và Lipid", "Chỉ có Phospholipid"], correct: 1, hint: "Màng có cấu trúc khảm động gồm kép phospholipid và các phân tử protein." },
    { q: "Bào quan nào chỉ có ở tế bào thực vật, không có ở động vật?", options: ["Ti thể", "Lục lạp", "Ribosome", "Trung thể"], correct: 1, hint: "Lục lạp giúp thực vật thực hiện quá trình quang hợp." },
    { q: "Đặc điểm của tế bào nhân sơ là:", options: ["Có nhân hoàn chỉnh", "Có hệ thống nội màng", "Chưa có nhân hoàn chỉnh", "Có các bào quan có màng"], correct: 2, hint: "Nhân sơ (Prokaryote) nghĩa là vùng nhân chưa có màng bao bọc." },
    { q: "Chức năng của Ribosome là gì?", options: ["Tổng hợp lipid", "Tổng hợp protein", "Tổng hợp ATP", "Vận chuyển các chất"], correct: 1, hint: "Ribosome là nơi diễn ra quá trình dịch mã tổng hợp protein." },
    { q: "Năng lượng chủ yếu của tế bào tồn tại dưới dạng nào?", options: ["Nhiệt năng", "Quang năng", "Hóa năng (ATP)", "Cơ năng"], correct: 2, hint: "ATP là đồng tiền năng lượng của tế bào." },
    { q: "Quá trình nào chuyển quang năng thành hóa năng trong glucose?", options: ["Hô hấp tế bào", "Quang hợp", "Lên men", "Vận chuyển chất"], correct: 1, hint: "Thực vật dùng ánh sáng để tổng hợp chất hữu cơ qua quang hợp." },
    { q: "Bào quan nào chứa thông tin di truyền của tế bào nhân thực?", options: ["Bộ máy Golgi", "Ti thể", "Nhân tế bào", "Lưới nội chất"], correct: 2, hint: "Nhân chứa nhiễm sắc thể và DNA lưu giữ thông tin di truyền." },
    { q: "Cholesterol ở màng tế bào động vật có vai trò gì?", options: ["Vận chuyển chất", "Tiếp nhận thông tin", "Ổn định độ linh động của màng", "Xúc tác phản ứng"], correct: 2, hint: "Cholesterol giúp màng không quá lỏng lẻo cũng không quá cứng nhắc." },
    { q: "Vận chuyển chất từ nơi nồng độ thấp đến nơi nồng độ cao là:", options: ["Khuếch tán", "Thẩm thấu", "Vận chuyển chủ động", "Vận chuyển thụ động"], correct: 2, hint: "Quá trình này đi ngược chiều nồng độ nên cần ATP." },
    { q: "Enzyme có tính chuyên biệt là vì:", options: ["Nó bền với nhiệt", "Có trung tâm hoạt động khớp với cơ chất", "Nó có kích thước lớn", "Nó tan trong nước"], correct: 1, hint: "Cơ chế 'Chìa khóa và ổ khóa' giữa enzyme và cơ chất." },
    { q: "Nếu một enzyme bị mất cấu trúc không gian, nó sẽ:", options: ["Hoạt động mạnh hơn", "Mất khả năng xúc tác", "Chuyển thành protein dự trữ", "Không thay đổi gì"], correct: 1, hint: "Cấu trúc không gian quyết định hình dạng trung tâm hoạt động." },
    { q: "Nguyên tố nào là 'bộ khung' cho các đại phân tử hữu cơ?", options: ["Hydrogen", "Carbon", "Oxygen", "Nitrogen"], correct: 1, hint: "Carbon có 4 electron hóa trị, tạo liên kết đa dạng." },
    { q: "Đường đa (Polysaccharide) dự trữ ở động vật là:", options: ["Tinh bột", "Cellulose", "Glycogen", "Sucrose"], correct: 2, hint: "Glycogen được dự trữ chủ yếu ở gan và cơ." },
    { q: "Đường đa cấu tạo nên thành tế bào thực vật là:", options: ["Chitin", "Glycogen", "Cellulose", "Tinh bột"], correct: 2, hint: "Cellulose tạo nên sự vững chắc cho thân cây." },
    { q: "Lipid không có đặc điểm nào sau đây?", options: ["Không tan trong nước", "Cấu tạo theo nguyên tắc đa phân", "Tan trong dung môi hữu cơ", "Cung cấp năng lượng"], correct: 1, hint: "Lipid KHÔNG cấu tạo theo nguyên tắc đa phân." },
    { q: "Đơn phân của DNA là gì?", options: ["Amino acid", "Nucleotide", "Glucose", "Glycerol"], correct: 1, hint: "Mỗi Nucleotide gồm đường, phosphate và một base nitơ." },
    { q: "Base nitơ nào chỉ có trong RNA mà không có trong DNA?", options: ["Adenine (A)", "Guanine (G)", "Uracil (U)", "Thymine (T)"], correct: 2, hint: "DNA dùng T, còn RNA dùng U thay thế." },
    { q: "Liên kết giữa các amino acid trong chuỗi polypeptide là:", options: ["Liên kết Hydrogen", "Liên kết Peptide", "Liên kết Ionic", "Liên kết Cộng hóa trị"], correct: 1, hint: "Nhóm carboxyl của amino acid này nối với nhóm amino của amino acid kia." },
    { q: "Hệ thống lưới nội chất hạt có chức năng chính là:", options: ["Tổng hợp lipid", "Tổng hợp protein", "Giải độc cho tế bào", "Dự trữ Canxi"], correct: 1, hint: "Lưới nội chất hạt có đính các ribosome nên tổng hợp protein." },
    { q: "Chức năng của bộ máy Golgi là:", options: ["Tổng hợp ATP", "Lưu trữ thông tin di truyền", "Gói, biến đổi và phân phối sản phẩm", "Tiêu hóa thức ăn"], correct: 2, hint: "Nơi đây được ví như 'trạm bưu điện' của tế bào." },
    { q: "Thành phần nào giúp vi khuẩn bám dính vào bề mặt vật chủ?", options: ["Vỏ nhầy hoặc lông nhung", "Màng sinh chất", "Ribosome", "DNA vùng nhân"], correct: 0, hint: "Vỏ nhầy giúp bảo vệ và bám dính." },
    { q: "Số liên kết hydrogen giữa G và C là bao nhiêu?", options: ["1", "2", "3", "4"], correct: 2, hint: "A nối với T bằng 2 liên kết, G nối với C bằng 3 liên kết." },
    { q: "Phân tử nào là vật chất di truyền ở cấp độ phân tử?", options: ["Protein", "RNA", "Lipid", "DNA"], correct: 3, hint: "DNA lưu trữ toàn bộ mật mã di truyền." },
    { q: "Sự khuếch tán của các phân tử nước qua màng gọi là:", options: ["Vận chuyển chủ động", "Sự thẩm thấu", "Sự ẩm bào", "Sự xuất bào"], correct: 1, hint: "Thẩm thấu là khuếch tán riêng của nước qua màng bán thấm." },
    { q: "ATP truyền năng lượng cho các phân tử khác bằng cách:", options: ["Phân hủy hoàn toàn phân tử", "Chuyển nhóm phosphate cuối cùng", "Kết hợp với O2", "Tạo ra nhiệt"], correct: 1, hint: "Liên kết giữa các nhóm phosphate chứa năng lượng rất cao." },
    { q: "Cơ thể bị bệnh rối loạn chuyển hóa thường do thiếu hụt:", options: ["Vitamin", "Hormone", "Enzyme", "Nước"], correct: 2, hint: "Thiếu enzyme khiến chuỗi phản ứng sinh hóa bị dừng hoặc đi sai hướng." },
    { q: "Sản phẩm cuối cùng của hô hấp tế bào là gì?", options: ["O2, Glucose, ATP", "CO2, H2O, ATP", "Ánh sáng, H2O", "Tinh bột"], correct: 1, hint: "Hô hấp đốt cháy chất hữu cơ tạo năng lượng, thải khí CO2." },
    { q: "Công thức tính số Nucleotide của gen khi biết chiều dài (L) là:", options: ["N = L / 3.4", "N = (L / 3.4) * 2", "N = L * 2", "N = L / 2"], correct: 1, hint: "Mỗi chuỗi dài 3.4Å cho 1 nu, DNA có 2 chuỗi." },
    { q: "Hiện tượng tế bào nhân thực 'ăn' các vi khuẩn gọi là:", options: ["Xuất bào", "Ẩm bào", "Thực bào", "Thẩm thấu"], correct: 2, hint: "Thực bào là lấy các phân tử chất rắn có kích thước lớn." },
    { q: "Nguyên tố nào sau đây là nguyên tố đại lượng?", options: ["Fe", "Cu", "Ca", "Zn"], correct: 2, hint: "Calcium (Ca) cần lượng lớn để cấu tạo xương và truyền tin." },
    { q: "Tại sao nên ăn nhiều loại rau xanh khác nhau?", options: ["Để no lâu hơn", "Cung cấp đầy đủ các loại vitamin và khoáng chất", "Để đẹp da", "Để giảm cân"], correct: 1, hint: "Mỗi loại rau có thành phần vi chất khác nhau." }
];

let currentIdx = 0;
let scoreCorrect = 0;
let scoreWrong = 0;

function init() { loadQuestion(); }

function loadQuestion() {
    if (currentIdx >= quizData.length) { showResult(); return; }
    const data = quizData[currentIdx];
    document.getElementById('current-pos').innerText = currentIdx + 1;
    document.getElementById('question').innerText = data.q;
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    
    data.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = `${String.fromCharCode(65+idx)}. ${opt}`;
        btn.onclick = () => handleAnswer(idx);
        optionsDiv.appendChild(btn);
    });
}

function handleAnswer(choice) {
    const correct = quizData[currentIdx].correct;
    const msg = document.getElementById('monkey-message');
    const sndCorrect = document.getElementById('snd-correct');
    const sndWrong = document.getElementById('snd-wrong');

    if (choice === correct) {
        scoreCorrect++;
        document.getElementById('score-correct').innerText = scoreCorrect;
        if(sndCorrect) sndCorrect.play();
        msg.innerText = "Tuyệt đỉnh! Học sinh Lập Nghiệp giỏi quá! 🐒🍌";
        msg.style.borderColor = "var(--success-color)";
    } else {
        scoreWrong++;
        document.getElementById('score-wrong').innerText = scoreWrong;
        if(sndWrong) sndWrong.play();
        msg.innerText = "Cảnh báo! Gợi ý: " + quizData[currentIdx].hint;
        msg.style.borderColor = "var(--error-color)";
    }
    currentIdx++;
    setTimeout(loadQuestion, 2000);
}

function showResult() {
    document.getElementById('quiz-section').style.display = 'none';
    document.getElementById('result-screen').style.display = 'block';
    const finalScore = (scoreCorrect / quizData.length * 10).toFixed(1);
    document.getElementById('final-stats').innerHTML = `Đúng: ${scoreCorrect} | Sai: ${scoreWrong} <br> <b>Điểm số: ${finalScore}/10</b>`;
    document.getElementById('final-message').innerText = scoreCorrect >= 32 ? 
        "Bạn là ngôi sao sáng của THPT LẬP NGHIỆP! 🌟" : 
        "Hãy ôn luyện cùng Khỉ con thêm nhé! 💪";
}

function restartGame() {
    currentIdx = 0; scoreCorrect = 0; scoreWrong = 0;
    document.getElementById('score-correct').innerText = 0;
    document.getElementById('score-wrong').innerText = 0;
    document.getElementById('quiz-section').style.display = 'block';
    document.getElementById('result-screen').style.display = 'none';
    init();
}

window.onload = init;
